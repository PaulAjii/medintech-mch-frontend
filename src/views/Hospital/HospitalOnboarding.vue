<template>
	<div
		class="h-screen w-full bg-gradient-to-b from-primary-300 to-neutral relative flex items-center justify-center"
	>
		<div class="absolute bottom-px w-full h-1/2">
			<img
				src="../../assets/images/onboarding-image.png"
				alt="Backdrop"
				class="w-full h-full"
			/>
		</div>
		<div class="bg-neutral w-[700px] h-[700px] absolute p-8">
			<div v-if="!locationCompleted">
				<h2 class="text-h4 font-bold mb-4">Your Hospital location</h2>

				<div class="flex justify-between align-center">
					<FormKit
						type="form"
						v-model="locationData"
						@submit="handleLocationSubmit"
					>
						<FormKit
							type="select"
							name="state"
							label="State"
							validation="required"
							:options="states"
						/>

						<FormKit
							type="select"
							name="lga"
							label="Local Government"
							validation="required"
							:options="lga"
						/>
					</FormKit>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { LocationData } from '../../types/hospital';

	const locationCompleted = ref(false);
	const locationData = ref<LocationData>({
		state: '',
		local_government: '',
	});

	const handleLocationSubmit = () => {
		locationCompleted.value = true;
	};
</script>
