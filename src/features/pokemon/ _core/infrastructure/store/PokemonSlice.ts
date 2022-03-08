import { createSlice } from '@reduxjs/toolkit';
import { listPokemonsAsync } from './PokemonThunks';
import { Pokemon } from '../../domain/entity/Pokemon';
export interface PokemonState {
  pokemons: Pokemon[];
  isLoading: boolean;
}

const initialState: PokemonState = {
  pokemons: [],
  isLoading: false
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(listPokemonsAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(listPokemonsAsync.fulfilled, (state, action) => {
        state.pokemons = action.payload;
        state.isLoading = false;
      })
      .addCase(listPokemonsAsync.rejected, (state, action) => {
        state.isLoading = false;
      });
  }
});

export default pokemonSlice.reducer;
