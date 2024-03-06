export interface CharacterHero {
  info: Info;
  results: Results[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: number;
}

export interface Results {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: object;
  url: string;
  created: string;
}

export interface Origin {
  name: string;
  url: string;
}


