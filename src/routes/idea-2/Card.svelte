<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLBaseAttributes } from 'svelte/elements';

	interface Props {
		children?: Snippet<[]>;
		class?: HTMLBaseAttributes['class'];
	}

	const { children, class: classNames }: Props = $props();
</script>

<div class="rounded-md border border-gray-700 {classNames} bg-white p-5">
	{@render children?.()}
</div>
