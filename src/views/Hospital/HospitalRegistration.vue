<template>
	<OnboardingBg>
		<div
			class="bg-neutral w-[700px] h-[700px] absolute p-8"
			v-if="!locationCompleted"
		>
			<form class="w-full h-full flex flex-col justify-between">
				<div class="w-full h-full font-manrope">
					<FormHead text="Your Hospital Location" />

					<div class="w-full">
						<div class="flex gap-6 justify-between">
							<div class="w-1/2 flex flex-col gap-1">
								<label for="state">State</label>
								<select
									class="w-full outline-none p-4 bg-neutral-200 outline-none text-neutral-500 border border-solid border-neutral-400 rounded-lg overflow-hidden"
									:class="{
										'border-primary border-solid border-2':
											stateError,
									}"
									name="state"
									v-model="locationData.state"
									@change="handleStateChange"
									@blur="handleStateBlur"
								>
									<option
										v-for="(state, index) in stateOptions"
										:key="index"
										:value="state.value"
										class="text-neutral-600"
									>
										{{ state.label }}
									</option>
								</select>
								<FormError :error="stateError" />
							</div>

							<div class="w-1/2 flex flex-col gap-1">
								<label
									class="text-base font-medium text-neutral-700"
									for="lga"
									>Local Government</label
								>
								<select
									name="lga"
									v-model="locationData.lga"
									class="w-full outline-none p-4 bg-neutral-200 outline-none text-neutral-500 border border-solid border-neutral-400 rounded-lg overflow-hidden"
									:class="{
										'border-primary border-solid border-2':
											lgaError,
									}"
									@blur="handleLGABlur"
								>
									<option
										v-for="(lga, index) in lgaOptions"
										:key="index"
										:value="lga.value"
										class="text-neutral-600"
									>
										{{ lga.label }}
									</option>
								</select>
								<FormError :error="lgaError" />
							</div>
						</div>
					</div>
				</div>

				<button
					class="w-full bg-primary py-4 px-6 rounded-xl text-neutral cursor-pointer"
					:class="{
						hidden: !isFormValid,
					}"
					:disabled="!isFormValid"
					type="button"
					@click="handleLocationSubmit"
				>
					Continue
				</button>
			</form>
		</div>

		<!-- MULTI STEP -->
		<div
			class="bg-neutral w-[700px] h-[700px] absolute p-8 pb-14"
			v-else
		>
			<ProgressBar
				:steps="steps"
				:currentStep="currentStep"
			/>
			<component
				:is="currentStepComponent"
				:model-value="
					formData[currentStep === 0 ? 'hospitalData' : 'security']
				"
				@update:model-value="handleStepUpdate"
				@next="handleNext"
				@complete="handleComplete"
			/>
		</div>
	</OnboardingBg>
</template>
<script setup lang="ts">
	import { ref, computed, watch } from 'vue';
	import OnboardingBg from './components/OnboardingBg.vue';
	import FormHead from './components/FormHead.vue';
	import statesData from '../../assets/json-data/nigerian-states.json';
	import type {
		HospitalFormData,
		LocationData,
		NigerianStates,
		SecurityFormData,
	} from '../../types/hospital';
	import FormError from '../../components/FormError.vue';
	import HospitalData from './form-steps/HospitalData.vue';
	import SecurityData from './form-steps/SecurityData.vue';
	import ProgressBar from './components/ProgressBar.vue';

	const locationCompleted = ref(false);
	const currentStep = ref(0);

	const locationData = ref<LocationData>({
		state: '',
		lga: '',
	});

	const touchedFields = ref({
		state: false,
		lga: false,
	});

	const stateError = computed((): string => {
		if (!touchedFields.value.state) return '';
		if (!locationData.value.state) return 'Please select a State';
		if (locationData.value.state === '') return 'State is required';
		return '';
	});

	const lgaError = computed((): string => {
		if (!touchedFields.value.lga) return '';
		if (!locationData.value.lga) return 'Please select a Local Government';
		if (locationData.value.state === '')
			return 'Local Government is required';
		return '';
	});

	const handleStateBlur = () => {
		touchedFields.value.state = true;
	};

	const handleLGABlur = () => {
		touchedFields.value.lga = true;
	};

	const formData = ref({
		hospitalData: {
			hospitalName: '',
			tier: '',
			address: '',
			phone_number: '',
			email_address: '',
		},
		security: {
			password: '',
			confirm_password: '',
		},
	});

	const steps = ['Hospital Data', 'Security Data'];

	const currentStepComponent = computed(() => {
		const components = {
			0: HospitalData,
			1: SecurityData,
		}[currentStep.value];

		return components || HospitalData;
	});

	type StepKeys = 'hospitalData' | 'security';

	const updateStepData = <T extends StepKeys>(
		step: T,
		value: (typeof formData.value)[T]
	) => {
		formData.value[step] = value;
	};

	const handleStepUpdate = (value: HospitalFormData | SecurityFormData) => {
		const step = currentStep.value === 0 ? 'hospitalData' : 'security';
		updateStepData(step, value);
	};

	const handleNext = () => {
		if (currentStep.value < steps.length - 1) currentStep.value++;
	};

	const stateOptions = computed(() => {
		return [
			{ label: 'Select state', value: '' },
			...Object.keys(statesData).map((state) => ({
				label: state,
				value: state,
			})),
		];
	});

	const lgaOptions = computed(() => {
		const defaultOption = [{ label: 'Select LGA', value: '' }];

		if (!locationData.value.state) return defaultOption;

		const selectedStateLGAs = (statesData as NigerianStates)[
			locationData.value.state
		];
		return [
			...defaultOption,
			...selectedStateLGAs.map((lga) => ({
				label: lga,
				value: lga,
			})),
		];
	});

	watch(
		() => locationData.value.state,
		() => {
			locationData.value.lga = '';
		}
	);

	const isFormValid = computed(() => {
		return (
			locationData.value.state &&
			locationData.value.lga &&
			!stateError.value &&
			!lgaError.value
		);
	});

	const handleStateChange = () => {
		locationData.value.lga = '';
	};

	const handleLocationSubmit = () => {
		locationCompleted.value = true;
	};

	const handleComplete = () => {
		const data = {
			locationData: locationData.value,
			...formData.value,
		};
		console.log('Form filled', data);

		// ! Handle the api logic here
	};
</script>
