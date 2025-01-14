<script lang="ts">
	interface Props {
		type: 'Top' | 'Bottom';
		onStepComplete: () => void;
	}

	const { type: navigationPosition, onStepComplete }: Props = $props();
</script>

<div class="flex snap-start snap-always justify-center">
	<button
		class="mb-4 rounded-full border border-black bg-white p-2"
		class:mb-auto={navigationPosition === 'Top'}
		class:mt-auto={navigationPosition === 'Bottom'}
		onclick={onStepComplete}
		aria-label="Next"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			class:rotate-180={navigationPosition === 'Top'}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
		</svg>
	</button>
</div>
