import { createApp } from 'vue';
import { plugin as formkitPlugin, defaultConfig } from '@formkit/vue';
import { createMultiStepPlugin } from '@formkit/addons';
import router from './router/index';
import './style.css';
import App from './App.vue';

createApp(App)
	.use(
		formkitPlugin,
		defaultConfig({
			plugins: [createMultiStepPlugin()],
		})
	)
	.use(router)
	.mount('#app');
