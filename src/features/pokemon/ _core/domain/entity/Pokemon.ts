export interface PokemonResult {
  count: number;
  next: string;
  previous: any;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  sprites: Sprite;
  type: string;
  types: TypePayload[];
}

export interface TypePayload {
  slot: number;
  type: Type;
}

export interface Type {
  name: string;
  url: string;
}

export interface Sprite {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}
