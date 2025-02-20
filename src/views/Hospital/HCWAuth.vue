<template>
	<OnboardingBg
		bgGradientPosition="bg-gradient-to-b"
		bgGradientFrom="from-primary-400"
		bgGradientTo="to-primary-400"
	>
		<div class="bg-neutral w-[700px] h-[700px] absolute p-8">
			<ProgressBar
				:steps="steps"
				:currentStep="currentStep"
			/>

			<template v-if="currentStep === 0">
				<HCWBio
					:model-value="formData.hcwData"
					@update:model-value="
						(value) => handleStepUpdate('hcwData', value)
					"
					@next="handleNext"
				/>
			</template>
			<template v-else>
				<HCWSecurity
					:model-value="formData.securityData"
					@update:model-value="
						(value) => handleStepUpdate('securityData', value)
					"
					@next="handleNext"
				/>
			</template>
		</div>
	</OnboardingBg>
</template>

<script setup lang="ts">
	import OnboardingBg from './components/OnboardingBg.vue';
	import ProgressBar from './components/ProgressBar.vue';
	import { ref } from 'vue';
	import HCWBio from './form-steps/HCWBio.vue';
	import HCWSecurity from './form-steps/HCWSecurity.vue';

	const currentStep = ref<number>(0);

	const formData = ref({
		hcwData: {
			name: '',
			category: '',
			license_number: '',
			phone_number: '',
			email_address: '',
		},
		securityData: {
			password: '',
			confirm_password: '',
		},
	});

	const steps = ['details', 'password'];

	type StepKeys = 'hcwData' | 'securityData';

	const handleStepUpdate = <T extends StepKeys>(
		step: T,
		value: (typeof formData.value)[T]
	) => {
		formData.value[step] = value;
	};

	const handleNext = (): void => {
		if (currentStep.value < steps.length - 1) {
			currentStep.value++;
		} else {
			handleComplete();
		}
	};

	const handleComplete = (): void => {
		const data = formData.value;

		console.log(data);

		// Create login logic
	};
</script>
