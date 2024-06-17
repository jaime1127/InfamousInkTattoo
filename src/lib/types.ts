// src/lib/types.ts
export interface Artist {
	name: string;
	photo: string;
	tattoos: string[];
}

export interface Location {
	Text: string;
	Artist: {
		Jose: Artist;
		Steve: Artist;
		Betsy: Artist;
	}[];
}

export interface InfamousInkData {
	Company: string;
	Hero: string;
	Tampa: Location;
	Volusia: Location;
	Daytona: {
		'Location Text': string;
		Artist: {
			John: Artist;
		};
	}[];
}
