<template>
	<div
		class="h-screen w-full bg-gradient-to-b from-primary-300 to-neutral relative flex items-center justify-center"
	>
		<div class="absolute bottom-px w-full h-1/2">
			<img
				src="../../../assets/images/onboarding-image.png"
				alt="Backdrop"
				class="w-full h-full"
			/>
		</div>

		<slot />
	</div>
</template>
