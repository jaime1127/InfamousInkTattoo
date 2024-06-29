import type { InfamousInkData } from '../../types';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const data = (await import('$lib/data/infamousInkData.json')).default as InfamousInkData;

	const allLocations = [data.Tampa, data.Daytona, data.PeachTree, data.VictoryDrive];

	return {
		locations: allLocations
	};
};
