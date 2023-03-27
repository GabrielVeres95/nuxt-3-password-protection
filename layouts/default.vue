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
					'data-site-id': 'fbe1e7da-d79b-4265-8209-a14f099d838e',
					'data-cap': 'The password is 123test123',
				},
			],
		}
	},
}
</script>
