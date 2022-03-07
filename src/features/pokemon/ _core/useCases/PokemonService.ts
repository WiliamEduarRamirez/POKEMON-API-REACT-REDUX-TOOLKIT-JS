import request from '../../../../infrastructure/api';
import { Pokemon, PokemonResult } from '../entity/Pokemon';

export interface PokemonService {
  list: (params: URLSearchParams) => Promise<PokemonResult>;
  details: (url: string) => Promise<Pokemon>;
}

export class PokemonServiceImpl implements PokemonService {
  details(url: string): Promise<Pokemon> {
    return request.get<Pokemon>(url);
  }

  list(): Promise<PokemonResult> {
    return request.get<PokemonResult>('/pokemon');
  }
}
