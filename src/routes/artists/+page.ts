import type { InfamousInkData } from '../../types';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const data = (await import('$lib/data/infamousInkData.json')).default as InfamousInkData;

    // Consolidate all artists into one array
    const allArtists = [
        ...data.Tampa.Artist,
        ...data.Daytona.Artist,
        ...data.PeachTree.Artist,
        ...data.VictoryDrive.Artist
    ];

    return {
        artists: allArtists
    };
};
