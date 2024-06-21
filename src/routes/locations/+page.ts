import type { InfamousInkData } from '../../types';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const data = (await import('$lib/data/infamousInkData.json')).default as InfamousInkData;

	return {
		locations: {
			daytona: {
				storeFront: data.Daytona.storeFront,
				address: data.Daytona.address,
				location: data.Daytona.location
			},
			tampa: {
				storeFront: data.Tampa.storeFront,
				address: data.Tampa.address,
				location: data.Tampa.location
			},
			peachTree: {
				storeFront: data.PeachTree.storeFront,
				address: data.PeachTree.address,
				location: data.PeachTree.location
			},
			victoryLaneStore: {
				storeFront: data.VictoryDrive.storeFront,
				address: data.VictoryDrive.address,
				location: data.VictoryDrive.location
			}
		}
	};
};
