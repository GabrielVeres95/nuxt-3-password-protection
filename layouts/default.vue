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
					'data-site-id': 'c539b96b-1c50-4ae5-9c84-eb411ad8421d',
					'data-cap': 'TEstingeee',
				},
			],
		}
	},
}
</script>
