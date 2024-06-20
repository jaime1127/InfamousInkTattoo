import type { InfamousInkData } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const data = (await (await import('$lib/data/infamousInkData.json')).default) as InfamousInkData;
	const tampaArtists = data.VictoryDrive.Artist[0];
	const artistKeys = Object.keys(tampaArtists);

	let tattoos: string[] = [];
	let piercing: string[] = [];

	artistKeys.forEach(key => {
		const artist = tampaArtists[key];
		if (artist.tattoos) {
			tattoos = tattoos.concat(artist.tattoos);
		}
		if (artist.piercing) {
			piercing = piercing.concat(artist.piercing);
		}
	});

	return {
		title: data.Company,
		content: data.Hero,
		tattoos,
		piercing,
		storeFront: data.VictoryDrive.storeFront,
		google:data.VictoryDrive.google
	};
};