// src/lib/types.ts
export interface Artist {
	[artistName: string]: {
		name: string;
		photo: string;
		location: string;
		tattoos?: string[];
		piercing?: string[];
	};
}

export interface Location {
	Text: string;
	Artist: Artist[];
	storeFront?: string;
	google?: string;
}

export interface InfamousInkData {
	Company: string;
	Hero: string;
	HeroImg: string;
	Tampa: Location;
	Daytona: Location;
	PeachTree: Location;
	VictoryDrive: Location;
}
