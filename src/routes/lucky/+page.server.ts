import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	// 50% random pre-condition
	if (Math.random() <= 0.5) {
		// Redirect to conditions-failed if condition fails
		throw redirect(302, '/wild/conditions-failed');
	}

	// If condition passes, allow the page to load
	return {};
};
