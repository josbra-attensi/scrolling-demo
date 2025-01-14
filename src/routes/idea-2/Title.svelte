<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet<[]>;
		bottomMargin?: boolean;
	}

	let { children, bottomMargin = false }: Props = $props();
</script>

<h2 class="hyphens-auto break-words break-all text-3xl" class:mb-6={bottomMargin}>
	{@render children?.()}
</h2>
