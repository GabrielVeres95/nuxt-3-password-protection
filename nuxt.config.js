// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['~/assets/styles/main.sass'],
	app: {
		head: {
			script: [
				{
					hid: 'staticshield',
					src: 'https://staticshield.vercel.app/script.js',
					'data-site-id': 'c539b96b-1c50-4ae5-9c84-eb411ad8421d',
					'data-cap': 'TEstingeee',
				},
			],
		},
	},
})
