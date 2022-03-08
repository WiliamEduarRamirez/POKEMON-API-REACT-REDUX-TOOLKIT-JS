import { Pokemon, PokemonResult } from '../../domain/entity/Pokemon';
import request from '../../../../../infrastructure/api';

export interface PokemonRepository {
  GetPokemons: () => Promise<PokemonResult>;
  GetPokemonDetails: (url: string) => Promise<Pokemon>;
}

export class PokemonRepositoryImpl implements PokemonRepository {
  url = '/pokemon';

  GetPokemons(): Promise<PokemonResult> {
    return request.get<PokemonResult>(this.url);
  }

  GetPokemonDetails(url: string): Promise<Pokemon> {
    return request.get<Pokemon>(url);
  }
}
