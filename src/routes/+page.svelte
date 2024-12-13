<script lang="ts">
	import type { Snippet } from 'svelte';

	type StepSnippet = (i: number) => ReturnType<Snippet>;

	let scrollingContainer = $state<HTMLDivElement | undefined>();

	let visibleSteps = $state<StepSnippet[]>([start]);
	let steps: StepSnippet[] = [start, information, paragraph, trueFalse, multipleChoice, summary];

	function showNextStep(i: number) {
		visibleSteps = [...visibleSteps, steps[i + 1]];
	}

	function onscroll() {
		if (scrollingContainer) {
			const atBottom =
				scrollingContainer.scrollTop + scrollingContainer.clientHeight >=
				scrollingContainer.scrollHeight;

			if (atBottom) alert('Bottom of current step!');
		}
	}
</script>

<div
	id="container"
	class="max-h-screen snap-y overflow-y-auto scroll-smooth"
	bind:this={scrollingContainer}
	{onscroll}
>
	{#each visibleSteps as stepSnippet, i (i)}
		{@render stepSnippet(i)}
	{/each}
</div>

{#snippet start(i: number)}
	{@const visibleStepIndex = visibleSteps.length - 1}
	<div
		class="flex min-h-screen w-screen snap-mandatory snap-start snap-always flex-col items-center justify-center gap-2 bg-red-200"
		id="start"
	>
		<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
			<h2 class="text-xl font-black">Start</h2>

			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
				Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo
				eius repellat, consectetur, distinctio deserunt!
			</p>
		</div>
		<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
			<h2 class="text-xl font-black">Start</h2>

			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
				Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo
				eius repellat, consectetur, distinctio deserunt!
			</p>
		</div>
		<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
			<h2 class="text-xl font-black">Start</h2>

			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
				Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo
				eius repellat, consectetur, distinctio deserunt!
			</p>
		</div>
		<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
			<h2 class="text-xl font-black">Start</h2>

			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
				Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo
				eius repellat, consectetur, distinctio deserunt!
			</p>

			{#if visibleStepIndex === i}
				<button class="cursor-pointer text-blue-500 hover:font-bold" onclick={() => showNextStep(i)}
					>Next</button
				>
			{/if}
		</div>
	</div>
{/snippet}

{#snippet information(i: number)}
	{@const visibleStepIndex = visibleSteps.length - 1}
	<div
		class="flex min-h-screen w-screen snap-mandatory snap-start snap-always flex-col items-center justify-center bg-blue-200"
	>
		<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
			<h2 class="text-xl font-black">Information</h2>

			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
				Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo
				eius repellat, consectetur, distinctio deserunt!
			</p>

			{#if visibleStepIndex === i}
				<button class="cursor-pointer text-blue-500 hover:font-bold" onclick={() => showNextStep(i)}
					>Next</button
				>
			{/if}
		</div>
	</div>
{/snippet}

{#snippet paragraph(i: number)}
	{@const visibleStepIndex = visibleSteps.length - 1}
	<div
		class="flex min-h-screen w-screen snap-mandatory snap-start snap-always flex-col items-center justify-center bg-green-200"
		id="paragraph"
	>
		<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
			<h2 class="text-xl font-black">Paragraph</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
				Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo
				eius repellat, consectetur, distinctio deserunt!
			</p>

			{#if visibleStepIndex === i}
				<button class="cursor-pointer text-blue-500 hover:font-bold" onclick={() => showNextStep(i)}
					>Next</button
				>
			{/if}
		</div>
	</div>
{/snippet}

{#snippet trueFalse(i: number)}
	{@const visibleStepIndex = visibleSteps.length - 1}
	<div
		class="flex min-h-screen w-screen snap-mandatory snap-start snap-always flex-col items-center justify-center bg-yellow-200"
		id="trueFalse"
	>
		<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
			<h2 class="text-xl font-black">True False</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
				Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo
				eius repellat, consectetur, distinctio deserunt!
			</p>

			{#if visibleStepIndex === i}
				<button class="cursor-pointer text-blue-500 hover:font-bold" onclick={() => showNextStep(i)}
					>Next</button
				>
			{/if}
		</div>
	</div>
{/snippet}

{#snippet multipleChoice(i: number)}
	{@const visibleStepIndex = visibleSteps.length - 1}
	<div
		class="flex min-h-screen w-screen snap-mandatory snap-start snap-always flex-col items-center justify-center bg-purple-200"
		id="multipleChoice"
	>
		<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
			<h2 class="text-xl font-black">Multiple Choice</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
				Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo
				eius repellat, consectetur, distinctio deserunt!
			</p>

			{#if visibleStepIndex === i}
				<button class="cursor-pointer text-blue-500 hover:font-bold" onclick={() => showNextStep(i)}
					>Next</button
				>
			{/if}
			>
		</div>

		<div class="flex flex-col gap-4">
			<div class="mx-auto bg-white p-4">Option 1</div>
			<div class="mx-auto bg-white p-4">Option 2</div>
			<div class="mx-auto bg-white p-4">Option 3</div>
			<div class="mx-auto bg-white p-4">Option 4</div>
			<div class="mx-auto bg-white p-4">Option 5</div>
			<div class="mx-auto bg-white p-4">Option 5</div>
			<div class="mx-auto bg-white p-4">Option 5</div>
			<div class="mx-auto bg-white p-4">Option 5</div>
			<div class="mx-auto bg-white p-4">Option 5</div>
			<div class="mx-auto bg-white p-4">Option 5</div>
		</div>
	</div>
{/snippet}

{#snippet summary()}
	<div
		class="flex min-h-screen w-screen snap-mandatory snap-start snap-always flex-col items-center justify-center bg-gray-200"
		id="summary"
	>
		<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
			<h2 class="text-xl font-black">Summary</h2>

			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
				Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo
				eius repellat, consectetur, distinctio deserunt!
			</p>

			<a class="cursor-pointer text-blue-500 hover:font-bold" href="#start">Back to start</a>
		</div>
	</div>
{/snippet}
