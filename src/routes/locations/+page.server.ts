import type { InfamousInkData } from '../../types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const data = (await import('$lib/data/infamousInkData.json')).default as InfamousInkData;

	const allLocations = [data.Tampa, data.Daytona, data.PeachTree, data.VictoryDrive];

	return {
		meta: {
			pageTitle: `Infamous Ink Tattoos and Piercing`,
			pageDescription: `Visit Infamous Ink Tattoos and Piercing. Our skilled artists and piercers offer top-notch custom tattoos and body piercings in a sophisticated and welcoming environment. Discover unique designs and a variety of styles to suit your personal taste.`,
			pageKeywords: `tattoos, piercing, custom tattoos, body piercings, tattoo shop, piercing studio`,
			pageAuthor: 'Infamous Ink'
		},
		locations: allLocations
	};
};
