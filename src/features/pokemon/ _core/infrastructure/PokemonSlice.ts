import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../../app/store';

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
  reducers: {}
  // extraReducers: builder => {
  //   builder;
  // }
});

export default pokemonSlice.reducer;
