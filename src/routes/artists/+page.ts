import type { InfamousInkData } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const data = (await (await import('$lib/data/infamousInkData.json')).default) as InfamousInkData;
	return {
		title: data.Company,
		content: data.Tampa.Text,
		tattoos: data.Tampa.Artist[0].Jose.tattoos
	};
};
