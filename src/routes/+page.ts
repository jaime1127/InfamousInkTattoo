import type { InfamousInkData } from '$lib/types';

export const load = async () => {
	const data = await (await import('$lib/data/infamousInkData.json')).default as InfamousInkData;
	return {
		data: {
            title: data.Company,
            content: data.Tampa.Text,
			image: data.Tampa.Artist[0].Betsy.images
        }
	};
};
