export interface Artist {
	name: string;
	photo: string;
	location: string;
	tattoos?: string[];
	piercing?: string[];
}

export interface LocationData {
	location: string;
	address: string;
	Text: string;
	storeFront: string;
	google: string;
	Artist: Artist[];
}

export interface InfamousInkData {
	Company: string;
	Hero: string;
	HeroImg: string;
	Tampa: LocationData;
	Daytona: LocationData;
	PeachTree: LocationData;
	VictoryDrive: LocationData;
}
