<template>
	<h2 class="text-h4 font-bold mb-8">{{ text }}</h2>
</template>

<script setup lang="ts">
	defineProps<{
		text: String;
	}>();
</script>
