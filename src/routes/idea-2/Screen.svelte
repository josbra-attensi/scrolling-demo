<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet<[]>;
		snapEnabled?: boolean;
		backgroundImage?: string | null;
	}

	let { children, snapEnabled = false, backgroundImage = null }: Props = $props();
</script>

<div
	class="justify-center-safe overflow-x-none mx-auto flex min-h-full w-[clamp(80vw,90vw,70rem)] max-w-[70rem] flex-col hyphens-auto px-1"
	class:snap-start={snapEnabled}
	data-background-image={backgroundImage}
	data-screen
>
	{@render children?.()}
</div>
