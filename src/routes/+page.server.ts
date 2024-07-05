import type { InfamousInkData } from '../types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const data = (await (await import('$lib/data/infamousInkData.json')).default) as InfamousInkData;

	return {
		title: data.Company,
		content: data.Hero,
		storeFront: data.VictoryDrive.storeFront,
		google: data.VictoryDrive.google,
		heroImg: data.HeroImg
	};
};
