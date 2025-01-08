<script lang="ts">
	interface Props {
		type: 'Top' | 'Bottom';
		onStepComplete: () => void;
	}

	const { type: navigationPosition, onStepComplete }: Props = $props();
</script>

<div class="flex justify-center">
	<button
		class="h-fit bg-orange-400 px-4 py-2"
		class:mb-auto={navigationPosition === 'Top'}
		class:mt-auto={navigationPosition === 'Bottom'}
		onclick={onStepComplete}
	>
		Next
	</button>
</div>
