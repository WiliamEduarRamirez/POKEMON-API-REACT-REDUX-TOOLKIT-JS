import { createSlice } from '@reduxjs/toolkit';
import { listPokemonsAsync } from './PokemonThunks';
export interface PokemonState {
  pokemons: any[];
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
        console.log(action.payload);
        state.isLoading = false;
      })
      .addCase(listPokemonsAsync.rejected, (state, action) => {
        state.isLoading = false;
      });
  }
});

export default pokemonSlice.reducer;
