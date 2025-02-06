declare module 'tailwindcss/tailwind-config' {
	export interface TailwindConfig {
		content: string[];
		theme: {
			extend: {
				colors: {
					primary: Record<string, string>;
					neutral: Record<string, string>;
				};
				fontFamily: {
					manrope: string[];
				};
			};
		};
		plugins: any[];
	}
}
