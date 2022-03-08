import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pokemonReducer from '../../features/pokemon/ _core/infrastructure/store/PokemonSlice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 }
    }).concat(logger)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
