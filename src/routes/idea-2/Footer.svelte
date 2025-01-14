<script lang="ts">
	import { fade } from 'svelte/transition';

	interface Props {
		numberOfSelections?: number;
	}

	let { numberOfSelections }: Props = $props();
</script>

<div id="footer" class="fast-footer w-full">
	{#if numberOfSelections}
		<div
			transition:fade
			class="mx-auto my-2 w-fit rounded-full bg-white px-4 py-2 text-center font-bold"
		>
			Select {numberOfSelections} to continue
		</div>
	{/if}
</div>

<style>
	.fast-footer {
		grid-row: 3;
	}
</style>
