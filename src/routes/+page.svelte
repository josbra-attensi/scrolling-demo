<script lang="ts">
	import ScrollItem from '$lib/ScrollItem.svelte';
	import { tick, type Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	let scrollingContainer = $state<HTMLDivElement | undefined>();
	let showStepBackgrounds = $state(true);
	let showToast = $state(false);
	let gameStarted = $state(false);
	let stepRefs = $state<HTMLElement[]>([]);

	let visibleSteps = $state<Snippet[]>([start]);
	let steps: Snippet[] = [start, information, paragraph, trueFalse, multipleChoice, summary];

	function startGame() {
		gameStarted = true;
		showNextStep(visibleSteps.length);
		triggerToast();
	}

	async function scrollToStep(i: number) {
		await tick();
		const step = stepRefs[i];
		if (step) {
			step.scrollIntoView({ behavior: 'smooth' });
		}
	}

	async function showNextStep(i: number) {
		visibleSteps = [...visibleSteps, steps[i + 1]];
		await tick();
		scrollToStep(i + 1);
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

			let isLastStep = visibleSteps.length === steps.length;

			if (isLastStep) return;

			if (atBottom && gameStarted && visibleSteps.length < steps.length - 1) {
				triggerToast();
				setTimeout(() => showNextStep(visibleSteps.length), 1000);
			}
		}
	}
</script>

{#if showToast}
	<div
		id="toast"
		class="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-white px-4 py-2 shadow"
		transition:fly={{ y: 200, duration: 500 }}
	>
		Next step unlocked
	</div>
{/if}

<div class="min-h-dvh w-full bg-gradient-to-t from-indigo-400 to-indigo-200 bg-fixed">
	<div
		id="container"
		class="max-h-screen w-full snap-y snap-mandatory overflow-y-auto scroll-smooth"
		bind:this={scrollingContainer}
		{onscroll}
	>
		<div class="sticky top-0 h-[100px]">Testing</div>
		{#each visibleSteps as stepSnippet, i (i)}
			<ScrollItem stepNumber={i} {showStepBackgrounds} bgColor="bg-red-200 bind:this={stepRefs[i]}">
				{@render stepSnippet?.()}
			</ScrollItem>
		{/each}
	</div>
</div>

{#snippet start()}
	<div class="mt-2 w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
		<h2 class="text-xl font-black">Start</h2>

		<p>
			This is demo 1, the old scrolling behaviour. <a
				href="/idea-2"
				class="cursor-pointer text-blue-500 underline">Click here</a
			> go to demo 2
		</p>
	</div>
	<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
			Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo eius
			repellat, consectetur, distinctio deserunt!
		</p>
	</div>
	<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
			Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo eius
			repellat, consectetur, distinctio deserunt!
		</p>
	</div>
	<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
			Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo eius
			repellat, consectetur, distinctio deserunt!
		</p>

		<button class="rounded-lg bg-blue-500 p-2 text-white" onclick={startGame}>Start Game</button>
	</div>
{/snippet}

{#snippet information()}
	<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
		<h2 class="text-xl font-black">Information</h2>

		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
			Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo eius
			repellat, consectetur, distinctio deserunt!
		</p>
	</div>
{/snippet}

{#snippet paragraph()}
	<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
		<h2 class="text-xl font-black">Paragraph</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
			Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo eius
			repellat, consectetur, distinctio deserunt!
		</p>
	</div>
{/snippet}

{#snippet trueFalse()}
	<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
		<h2 class="text-xl font-black">True False</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
			Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo eius
			repellat, consectetur, distinctio deserunt!
		</p>
	</div>
{/snippet}

{#snippet multipleChoice()}
	<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
		<h2 class="text-xl font-black">Multiple Choice</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
			Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo eius
			repellat, consectetur, distinctio deserunt!
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
{/snippet}

{#snippet summary()}
	<div class="w-5/6 rounded-md border border-gray-700 bg-white p-5 md:w-1/2">
		<h2 class="text-xl font-black">Summary</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium explicabo nam!
			Consequatur vero cumque ratione optio? Provident quo quia totam tempora iste dolorem nemo eius
			repellat, consectetur, distinctio deserunt!
		</p>

		<a class="cursor-pointer text-blue-500 hover:font-bold" href="#step-0">Back to start</a>
	</div>
{/snippet}
