import { Pokemon } from '../domain/entity/Pokemon';
import { PokemonRepository } from '../infrastructure/repository/PokemonRepositoryImpl';
import sleep from '../../../../app/common/function/sleep';

export interface PokemonService {
  List: () => Promise<Pokemon[]>;
  Details: (url: string) => Promise<Pokemon>;
}

export class PokemonServiceImpl implements PokemonService {
  constructor(private _pokemonRepository: PokemonRepository) {}

  async Details(url: string): Promise<Pokemon> {
    return await this._pokemonRepository.GetPokemonDetails(url);
  }

  async List(): Promise<Pokemon[]> {
    await sleep(1000);
    const response = await this._pokemonRepository.GetPokemons();
    return await Promise.all(
      response.results.map(async result => {
        const tempPokemon = await this._pokemonRepository.GetPokemonDetails(result.url);
        tempPokemon.type = tempPokemon?.types[0]?.type?.name || 'normal';
        return tempPokemon;
      })
    );
  }
}
