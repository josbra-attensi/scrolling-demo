type SetBackgroundImageFunc = (backgroundImage: string | undefined) => void;

// Use a mutation observer to create new IntersectionObservers on the `container` when it is rerendered.
// Use `gameAreaId` to pass an id required for checking the element was what was expected.
const createStepObserverManager = (
	setBackgroundImage: (backgroundImage: string | undefined) => void,
	container: HTMLElement,
	gameAreaId: string
): MutationObserver => {
	const findGameAreaRerenders: MutationCallback = (mutationList, _observer) => {
		mutationList.forEach((mutation) => {
			if (mutation.type === 'childList' && mutation?.nextSibling) {
				const gameAreaElement = mutation.nextSibling;
				if (
					gameAreaElement.nodeType === Node.ELEMENT_NODE &&
					gameAreaElement instanceof HTMLElement
				) {
					if (gameAreaElement.id !== gameAreaId) {
						throw new Error(
							`Next sibling is not the expected game area - element id does not match. ${gameAreaId}`
						);
					}
					createStepObserver(setBackgroundImage, gameAreaElement);
				}
			}
		});
	};

	const observer = new MutationObserver(findGameAreaRerenders);
	observer.observe(container, { childList: true });
	return observer;
};

// Create an IntersectionObserver on a scrollable area and use `setBackgroundImage` to pass "data-background-image" back.
const createStepObserver = (setBackgroundImage: SetBackgroundImageFunc, container: HTMLElement) => {
	const observer = new IntersectionObserver(
		(entries) => {
			const visibleStep = entries.find((entry) => entry.isIntersecting);
			if (!visibleStep) return undefined;
			const backgroundImage = visibleStep.target.getAttribute('data-background-image') ?? undefined;
			setBackgroundImage(backgroundImage);
		},
		{ threshold: 0.5 }
	);

	const steps = container.querySelectorAll('[data-screen]');
	steps.forEach((step) => observer.observe(step));
	return observer;
};

const backgroundState: { currentBackgroundImage: string | undefined } = $state({
	currentBackgroundImage: undefined
});

const setBackgroundImage = (backgroundImage: string | undefined) => {
	backgroundState.currentBackgroundImage = backgroundImage;
};

export { backgroundState, setBackgroundImage, createStepObserver, createStepObserverManager };
