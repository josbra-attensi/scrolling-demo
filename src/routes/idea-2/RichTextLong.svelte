<script lang="ts">
	import Card from './Card.svelte';
	import Screen from './Screen.svelte';
	import Title from './Title.svelte';

	interface Props {
		associatedBackgroundImage?: string;
	}

	let { associatedBackgroundImage }: Props = $props();
</script>

<Screen snapEnabled backgroundImage={associatedBackgroundImage}>
	<Card class="flex flex-col gap-4">
		<Title>Long Rich Text Step</Title>

		<p>
			Lorem <strong>ipsum</strong> dolor sit
			<span class="text-xl font-black">amet consectetur adipisicing</span>
			elit. Odit obcaecati nobis animi ab perspiciatis, asperiores
			<span class="text-red-500">totam error</span>, blanditiis cumque, <i>rem minus sunt</i> reiciendis
			vitae 🥳. Deleniti delectus inventore dolorem officia aliquid.
		</p>

		<p>
			Lorem <strong>ipsum</strong> dolor sit amet consectetur adipisicing elit. Odit obcaecati nobis
			animi ab perspiciatis, asperiores
			<span class="text-green-500">totam error</span>, blanditiis cumque, <i>rem minus sunt</i> reiciendis
			vitae 🥳. Deleniti delectus inventore dolorem officia aliquid.
		</p>

		<p>
			Lorem <strong>ipsum</strong> dolor sit amet consectetur adipisicing elit. Odit obcaecati nobis
			animi ab perspiciatis, asperiores
			<span class="text-blue-500">totam error</span>, blanditiis cumque, <i>rem minus sunt</i> reiciendis
			vitae 🥳. Deleniti delectus inventore dolorem officia aliquid.
		</p>

		<p>
			Lorem <strong>ipsum</strong> dolor sit amet consectetur adipisicing elit. Odit obcaecati nobis
			animi ab perspiciatis, asperiores
			<span class="text-yellow-500">totam error</span>, blanditiis cumque, <i>rem minus sunt</i> reiciendis
			vitae 🥳. Deleniti delectus inventore dolorem officia aliquid.
		</p>

		<p>
			Lorem <strong>ipsum</strong> dolor sit amet consectetur adipisicing elit. Odit obcaecati nobis
			animi ab perspiciatis, asperiores
			<span class="text-purple-500">totam error</span>, blanditiis cumque, <i>rem minus sunt</i> reiciendis
			vitae 🥳. Deleniti delectus inventore dolorem officia aliquid.
		</p>
	</Card>
</Screen>
