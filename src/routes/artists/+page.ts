import type { InfamousInkData } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const data = (await (await import('$lib/data/infamousInkData.json')).default) as InfamousInkData;
	return {
		artists: {
			daytona: data.Daytona.Artist,
			tampa: data.Tampa.Artist,
			peachTree: data.PeachTree.Artist,
			victoryLane: data.VictoryDrive.Artist
		}
	};
};
