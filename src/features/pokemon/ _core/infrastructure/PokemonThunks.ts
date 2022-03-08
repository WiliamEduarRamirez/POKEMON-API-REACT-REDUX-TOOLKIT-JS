import { createAsyncThunk } from '@reduxjs/toolkit';
import { PokemonServiceImpl } from '../useCases/PokemonService';

// First, create the thunk
export const listPokemonsAsync = createAsyncThunk('users/fetchByIdStatus', async (_, thunkAPI) => {
  try {
    const pokemonService = new PokemonServiceImpl();
    const result = await pokemonService.list();
    
    console.log(result);
  } catch (error) {
    console.log(error);
  }
});
