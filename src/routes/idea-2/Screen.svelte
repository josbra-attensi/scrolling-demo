<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet<[]>;
		snapEnabled?: boolean;
	}

	let { children, snapEnabled = false }: Props = $props();
</script>

<div
	class="justify-center-safe overflow-x-none mx-auto flex min-h-full w-[clamp(16rem,90vw,70rem)] max-w-[70rem] flex-col hyphens-auto px-1"
	class:snap-start={snapEnabled}
>
	{@render children?.()}
</div>
