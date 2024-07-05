import type { InfamousInkData } from '../../types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const data = (await import('$lib/data/infamousInkData.json')).default as InfamousInkData;

	const allArtists = [
		...data.Tampa.Artist,
		...data.Daytona.Artist,
		...data.PeachTree.Artist,
		...data.VictoryDrive.Artist
	];

	return {
		meta: {
			pageTitle: `Meet Our Artists - Infamous Ink Tattoos and Piercing`,
			pageDescription: `Discover the talented team at Infamous Ink Tattoos and Piercing. Our artists specialize in a variety of tattoo styles and piercing techniques, offering exceptional craftsmanship and personalized designs.`,
			pageKeywords: `tattoo artists, piercing artists, custom tattoos, body piercings, tattoo shop, piercing studio, Infamous Ink`,
			pageAuthor: 'Infamous Ink'
		},
		artists: allArtists
	};
};
