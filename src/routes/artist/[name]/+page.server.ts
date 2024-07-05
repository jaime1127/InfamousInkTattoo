import type { InfamousInkData } from '../../../types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const data = (await import('$lib/data/infamousInkData.json')).default as InfamousInkData;

	const allArtists = [
		...data.Tampa.Artist,
		...data.Daytona.Artist,
		...data.PeachTree.Artist,
		...data.VictoryDrive.Artist
	];

	const artist = allArtists.find((artist) => artist.name === params.name);

	return {
		meta: {
			pageTitle: `Artist ${artist?.name} - Infamous Ink Tattoos and Piercing`,
			pageDescription: `Explore the stunning tattoo and piercing portfolio of ${artist?.name} at Infamous Ink Tattoos and Piercing. ${artist?.name} offers custom designs and exceptional craftsmanship in a welcoming environment.`,
			pageKeywords: `tattoos, piercing, custom tattoos, body piercings, tattoo shop, piercing studio, ${artist?.name}`,
			pageAuthor: 'Infamous Ink'
		},
		artist
	};
};
