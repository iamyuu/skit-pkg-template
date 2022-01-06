import { cleanup, render, screen } from '@testing-library/svelte';
import Button from './Button.svelte';

afterEach(() => cleanup());

test('mounts', () => {
	render(Button, { label: 'Button' });

	expect(
		screen.getByRole('button', {
			name: /button/i
		})
	).toBeInTheDocument();
});
