document.querySelectorAll('[data-tabs-root]').forEach((root) => {
	if (root.dataset.tabsBound === 'true') return;
	root.dataset.tabsBound = 'true';
	root.dataset.tabsReady = 'true';

	const buttons = Array.from(root.querySelectorAll('[data-tab-button]'));
	const panels = Array.from(root.querySelectorAll('[data-tab-panel]'));
	const requestedIndex = Number(root.dataset.initialIndex || 0);
	const hash = window.location.hash.replace(/^#/, '');
	const hashIndex = panels.findIndex((panel) => panel.id === hash);
	const initialIndex = hashIndex >= 0 ? hashIndex : requestedIndex;

	const activateTab = (targetIndex, options = {}) => {
		const updateHash = Boolean(options.updateHash);

		buttons.forEach((button, index) => {
			const isActive = index === targetIndex;
			button.classList.toggle('is-active', isActive);
			button.setAttribute('aria-selected', isActive ? 'true' : 'false');
			button.setAttribute('tabindex', isActive ? '0' : '-1');
		});

		panels.forEach((panel, index) => {
			const isActive = index === targetIndex;
			panel.classList.toggle('is-active', isActive);
		});

		if (updateHash && panels[targetIndex]?.id) {
			window.history.replaceState(null, '', `#${panels[targetIndex].id}`);
		}
	};

	buttons.forEach((button, index) => {
		button.addEventListener('click', (event) => {
			const targetPanel = panels[index];
			if (!targetPanel) return;
			event.preventDefault();
			activateTab(index, { updateHash: true });
			targetPanel.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
			});
		});

		button.addEventListener('keydown', (event) => {
			if (!(event instanceof KeyboardEvent)) return;
			if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
			event.preventDefault();

			let nextIndex = index;
			if (event.key === 'ArrowRight') nextIndex = (index + 1) % buttons.length;
			if (event.key === 'ArrowLeft') nextIndex = (index - 1 + buttons.length) % buttons.length;
			if (event.key === 'Home') nextIndex = 0;
			if (event.key === 'End') nextIndex = buttons.length - 1;

			activateTab(nextIndex, { updateHash: true });
			buttons[nextIndex]?.focus();
		});
	});

	activateTab(Number.isNaN(initialIndex) ? 0 : initialIndex);

	window.addEventListener('hashchange', () => {
		const activeHash = window.location.hash.replace(/^#/, '');
		const nextIndex = panels.findIndex((panel) => panel.id === activeHash);
		if (nextIndex >= 0) activateTab(nextIndex);
	});
});
