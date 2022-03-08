import { createAsyncThunk } from '@reduxjs/toolkit';
import { PokemonServiceImpl } from '../../useCases/PokemonService';
import { PokemonRepositoryImpl } from '../repository/PokemonRepositoryImpl';
import { Pokemon } from '../../domain/entity/Pokemon';

const pokemonImpl = new PokemonRepositoryImpl();
const pokemonService = new PokemonServiceImpl(pokemonImpl);

export const listPokemonsAsync = createAsyncThunk<Pokemon[], void>(
  'pokemon/listPokemonsAsync',
  async (_, thunkAPI) => {
    try {
      return await pokemonService.List();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
