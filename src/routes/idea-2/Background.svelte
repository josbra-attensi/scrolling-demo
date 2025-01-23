<script lang="ts">
	interface Props {
		currentBackgroundImage: string | undefined;
	}

	let { currentBackgroundImage }: Props = $props();

	let previousBackgroundImage = $state<string | undefined>(undefined);

	$effect(() => {
		if (currentBackgroundImage) {
			previousBackgroundImage = currentBackgroundImage;
		}
	});
</script>

<div
	class="transition-opacity-no-image absolute -z-10 max-h-dvh min-h-dvh w-full bg-gradient-to-t from-indigo-400 to-indigo-200"
	class:opacity-0={currentBackgroundImage}
	class:opacity-100={!currentBackgroundImage}
></div>
<div
	class="transition-background-image absolute -z-20 max-h-dvh min-h-dvh w-full from-indigo-400 to-indigo-200 bg-fixed"
	style:background-image={`url(${currentBackgroundImage ?? previousBackgroundImage})`}
></div>

<style>
	.transition-opacity-no-image {
		transition: opacity 1s ease-in-out;
	}

	.transition-background-image {
		transition: all 0.5s;
		transition-behavior: allow-discrete;
	}
</style>
