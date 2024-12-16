<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		stepNumber: number;
		showStepBackgrounds: boolean;
		bgColor: string;
		children: Snippet<[]>;
	}
	const { stepNumber, showStepBackgrounds, children }: Props = $props();
</script>

<div
	class="flex min-h-dvh w-full snap-mandatory snap-start snap-always flex-col items-center justify-center gap-2 py-2"
	class:{bgColor}={showStepBackgrounds}
	id="step-{stepNumber}"
>
	{@render children()}
</div>
