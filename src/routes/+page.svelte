<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	let scrollingContainer = $state<HTMLDivElement | undefined>();
	let showStepBackgrounds = $state(false);
	let showToast = $state(false);
	let gameStarted = $state(false);

	let visibleSteps = $state<Snippet[]>([start]);
	let steps: Snippet[] = [start, information, paragraph, trueFalse, multipleChoice, summary];

	function startGame() {
		gameStarted = true;
		showNextStep(visibleSteps.length);
		triggerToast();
	}

	function showNextStep(i: number) {
		visibleSteps = [...visibleSteps, steps[i + 1]];
	}

	function triggerToast() {
		showToast = true;
		setTimeout(() => {
			showToast = false;
		}, 3000);
	}

	function onscroll() {
		if (scrollingContainer) {
			const atBottom =
				scrollingContainer.scrollTop + scrollingContainer.clientHeight >=
				scrollingContainer.scrollHeight;

			if (atBottom && gameStarted) {
				triggerToast();
				setTimeout(() => showNextStep(visibleSteps.length), 500);
			}
		}
	}
</script>

<button
	class="absolute bottom-0 right-0 rounded-lg bg-white p-2 text-xs shadow shadow-black"
	onclick={() => (showStepBackgrounds = !showStepBackgrounds)}>BG</button
>

{#if showToast}
	<div
		id="toast"
		class="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-white px-4 py-2 shadow"
		transition:fly={{ y: 200, duration: 500 }}
	>
		Next step unlocked
	</div>
{/if}

<div
	id="container"
	class="max-h-screen snap-y overflow-y-auto scroll-smooth"
	bind:this={scrollingContainer}
	{onscroll}
>
	{#each visibleSteps as stepSnippet, i (i)}
		{@render stepSnippet?.()}
	{/each}
</div>

{#snippet start()}
	<div
		class="flex min-h-dvh w-screen snap-mandatory snap-start flex-col items-center justify-center gap-2 py-2"
		class:bg-red-200={showStepBackgrounds}
		id="start"
	>
		<div class="mt-2 w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
			<h2 class="text-xl font-black">Start</h2>

			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
				Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo
				eius repellat, consectetur, distinctio deserunt!
			</p>
		</div>
		<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
				Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo
				eius repellat, consectetur, distinctio deserunt!
			</p>
		</div>
		<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
				Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo
				eius repellat, consectetur, distinctio deserunt!
			</p>
		</div>
		<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
				Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo
				eius repellat, consectetur, distinctio deserunt!
			</p>

			<button class="rounded-lg bg-blue-500 p-2 text-white" onclick={startGame}>Start Game</button>
		</div>
	</div>
{/snippet}

{#snippet information()}
	<div
		class="mt-2 flex min-h-dvh w-screen snap-mandatory snap-start flex-col items-center justify-center"
		class:bg-blue-200={showStepBackgrounds}
	>
		<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
			<h2 class="text-xl font-black">Information</h2>

			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
				Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo
				eius repellat, consectetur, distinctio deserunt!
			</p>
		</div>
	</div>
{/snippet}

{#snippet paragraph()}
	<div
		class="mt-2 flex min-h-dvh w-screen snap-mandatory snap-start flex-col items-center justify-center"
		class:bg-green-200={showStepBackgrounds}
	>
		<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
			<h2 class="text-xl font-black">Paragraph</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
				Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo
				eius repellat, consectetur, distinctio deserunt!
			</p>
		</div>
	</div>
{/snippet}

{#snippet trueFalse()}
	<div
		class="mt-2 flex min-h-dvh w-screen snap-mandatory snap-start flex-col items-center justify-center"
		class:bg-yellow-200={showStepBackgrounds}
	>
		<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
			<h2 class="text-xl font-black">True False</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
				Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo
				eius repellat, consectetur, distinctio deserunt!
			</p>
		</div>
	</div>
{/snippet}

{#snippet multipleChoice()}
	<div
		class="mt-2 flex min-h-dvh w-screen snap-mandatory snap-start flex-col items-center justify-center gap-4"
		class:bg-purple-200={showStepBackgrounds}
	>
		<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
			<h2 class="text-xl font-black">Multiple Choice</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
				Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo
				eius repellat, consectetur, distinctio deserunt!
			</p>
		</div>

		<div class="flex w-5/6 flex-col gap-4">
			<div class="rounded-sm bg-white p-4">Option 1</div>
			<div class="rounded-sm bg-white p-4">Option 2</div>
			<div class="rounded-sm bg-white p-4">Option 3</div>
			<div class="rounded-sm bg-white p-4">Option 4</div>
			<div class="rounded-sm bg-white p-4">Option 5</div>
			<div class="rounded-sm bg-white p-4">Option 6</div>
			<div class="rounded-sm bg-white p-4">Option 7</div>
			<div class="rounded-sm bg-white p-4">Option 8</div>
			<div class="rounded-sm bg-white p-4">Option 9</div>
			<div class="rounded-sm bg-white p-4">Option 10</div>
		</div>
	</div>
{/snippet}

{#snippet summary()}
	<div
		class="mt-2 flex min-h-dvh w-screen snap-mandatory snap-start flex-col items-center justify-center"
		class:bg-gray-200={showStepBackgrounds}
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
