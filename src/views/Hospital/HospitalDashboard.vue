<template>
	<div class="font-manrope h-full">
		<HeaderBar />

		<div class="flex h-full pt-[64px]">
			<SideBar />

			<div class="w-full px-[40px] pt-[30px] bg-neutral-100">
				<div class="flex gap-6 items-center w-full mb-6">
					<DashboardCard
						text="healthcare workers (hcw)"
						number="32"
						bg_color="bg-neutral"
					/>
					<DashboardCard
						text="patients"
						number="32"
						bg_color="bg-neutral"
					/>
					<DashboardCard
						text="high-risk patients"
						number="8"
						bg_color="bg-primary-100"
					/>
				</div>

				<button
					type="button"
					class="flex gap-2 items-center bg-primary px-4 py-3 rounded-xl text-neutral font-medium text-sm mb-10"
					@click="handleClick"
				>
					<ClAddPlus class="text-base" />
					<span>Add Healthcare Worker</span>
				</button>

				<div>jkdjsfkj</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import HeaderBar from './components/HeaderBar.vue';
	import SideBar from './components/SideBar.vue';
	import DashboardCard from './components/DashboardCard.vue';
	import { ClAddPlus } from '@kalimahapps/vue-icons';
	import router from '../../router';

	const handleClick = () => {
		router.push('/hcw-registration');
	};
</script>
