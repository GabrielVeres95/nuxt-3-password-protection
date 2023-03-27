<template>
	<div class="staticshield-div">
		<NuxtPage></NuxtPage>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: 'StaticShield + Nuxtjs',
			script: [
				{
					hid: 'staticshield',
					src: 'https://staticshield.vercel.app/script.js',
					'data-site-id': '<DATA-SITE-ID>',
					'data-cap': '<CAPTION>',
				},
			],
		}
	},
}
</script>
