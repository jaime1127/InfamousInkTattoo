// src/lib/types.ts
export interface Artist {
	name: string;
	photo: string;
	tattoos: string[];
	location: string;
}

export interface Location {
	Text: string;
	Artist: string[];
}

export interface InfamousInkData {
	Company: string;
	Hero: string;
	Tampa: Location;
	Daytona: Location;
}
