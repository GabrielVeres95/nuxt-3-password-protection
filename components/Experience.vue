<template>
	<div>
		<canvas ref="webgl"></canvas>
	</div>
</template>

<script setup>
import { Scene, BoxGeometry, MeshBasicMaterial, Mesh, PerspectiveCamera, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new Scene()

// Red Cube
const geometry = new BoxGeometry(1, 1, 1)
const material = new MeshBasicMaterial({ color: '#ff0000' })

const redCube = new Mesh(geometry, material)
scene.add(redCube)

// Sizes
let sizes = {
	width: 0,
	height: 0,
}

const webgl = ref(null)

onMounted(() => {
	sizes = {
		width: window.innerWidth,
		height: window.innerHeight,
	}

	// Update Experience on window resize
	window.addEventListener('resize', () => {
		// Update Sizes
		sizes.width = window.innerWidth
		sizes.height = window.innerHeight

		// Update camera
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()

		// Update renderer
		renderer.setSize(sizes.width, sizes.height)
		// Set renderer pizel ratio between 1 and 2
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
	})

	// Full Screen Mode
	const canvas = document.querySelector('canvas')
	window.addEventListener('dblclick', () => {
		const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

		if (!fullscreenElement) {
			if (canvas.requestFullscreen) {
				canvas.requestFullscreen()
			} else if (canvas.webkitRequestFullscreen) {
				canvas.webkitRequestFullscreen()
			}
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen()
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen()
			}
		}
	})

	// Camera (field of view, aspect ratio)
	const camera = new PerspectiveCamera(45, sizes.width / sizes.height)
	camera.position.set(0, 0, 5)

	scene.add(camera)

	// Renderer
	const renderer = new WebGLRenderer({
		canvas: webgl.value,
	})

	renderer.setSize(sizes.width, sizes.height)

	// Controls
	const controls = new OrbitControls(camera, webgl.value)
	controls.enableDamping = true

	// Animations
	const tick = () => {
		// Update controls
		controls.update()

		// Render
		renderer.render(scene, camera)

		window.requestAnimationFrame(tick)
	}

	tick()
})
</script>
