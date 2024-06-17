// src/lib/types.ts
export interface Artist {
	[artistName: string]: {
		name: string;
		photo: string;
		location: string;
		tattoos: string[];
	};
}

export interface Location {
	Text: string;
	Artist: Artist[];
}

export interface InfamousInkData {
	Company: string;
	Hero: string;
	Tampa: Location;
	Daytona: Location;
}
