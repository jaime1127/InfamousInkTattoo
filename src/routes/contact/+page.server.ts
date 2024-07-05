import type { InfamousInkData } from '../../types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const data = (await import('$lib/data/infamousInkData.json')).default as InfamousInkData;

	return {
		meta: {
			pageTitle: `Contact Us - Infamous Ink Tattoos and Piercing`,
			pageDescription: `Get in touch with Infamous Ink Tattoos and Piercing. Whether you have questions, need more information, or want to book an appointment, our team is here to help you.`,
			pageKeywords: `contact, tattoos, piercing, custom tattoos, body piercings, tattoo shop, piercing studio, Infamous Ink`,
			pageAuthor: 'Infamous Ink'
		}
	};
};
