export interface Country {
	name: {
		official: string;
		nativeName: {
			[key: string]: {
				official: string;
			};
		};
	};
	cca2: string;
	cca3: string;
	flags: {
		png: string;
	};
	altSpellings: string[];
	idd: string;
}