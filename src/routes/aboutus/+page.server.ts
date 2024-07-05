import type { InfamousInkData } from '../../types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const data = (await import('$lib/data/infamousInkData.json')).default as InfamousInkData;

	return {
		meta: {
			pageTitle: `About Us - Infamous Ink Tattoos and Piercing`,
			pageDescription: `Learn more about Infamous Ink Tattoos and Piercing. Discover our story, meet our team of skilled artists and piercers, and find out what makes our studio unique.`,
			pageKeywords: `about us, tattoos, piercing, custom tattoos, body piercings, tattoo shop, piercing studio, Infamous Ink`,
			pageAuthor: 'Infamous Ink'
		}
	};
};
