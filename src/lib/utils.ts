import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { SvelteComponent } from 'svelte';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type WithElementRef<T extends Record<string, any>> = T & {
	ref?: SvelteComponent | HTMLAnchorElement | HTMLButtonElement | null;
};
