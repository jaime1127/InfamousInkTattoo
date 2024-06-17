import type { InfamousInkData } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const data = (await (await import('$lib/data/infamousInkData.json')).default) as InfamousInkData;
	return {
		title: data.Company,
		content: data.Hero,
		tattoos: Object.values(data.Daytona.Artist[0])[0].tattoos
	};
};
