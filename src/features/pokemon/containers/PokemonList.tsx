import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { listPokemonsAsync } from '../ _core/infrastructure/store/PokemonThunks';
import { CircularProgress } from '@mui/material';
import PokemonListItem from './PokemonListItem';

export default function PokemonList() {
  const dispatch = useAppDispatch();
  const { pokemons, isLoading } = useAppSelector(state => state.pokemon);

  React.useEffect(() => {
    dispatch(listPokemonsAsync());
  }, [dispatch]);

  return (
    <>
      <Grid container spacing={4}>
        {!isLoading && (
          <Fragment>
            {pokemons.map((tempPokemon, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <PokemonListItem pokemon={tempPokemon} />
              </Grid>
            ))}
          </Fragment>
        )}
        {isLoading && (
          <Grid
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50vh'
            }}
            item
            xs={12}
          >
            <CircularProgress />
          </Grid>
        )}
      </Grid>
    </>
  );
}
