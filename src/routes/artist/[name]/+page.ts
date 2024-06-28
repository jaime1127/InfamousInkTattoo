import type { InfamousInkData } from '../../../types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const data = (await import('$lib/data/infamousInkData.json')).default as InfamousInkData;

	const allArtists = [
		...data.Tampa.Artist,
		...data.Daytona.Artist,
		...data.PeachTree.Artist,
		...data.VictoryDrive.Artist
	];

	const artist = allArtists.find((artist) => artist.name === params.name);

	return { artist };
};
