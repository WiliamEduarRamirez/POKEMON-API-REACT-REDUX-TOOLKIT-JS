import React, { Fragment } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { listPokemonsAsync } from '../ _core/infrastructure/store/PokemonThunks';
import { CircularProgress } from '@mui/material';
import { POKEMON_TYPE_COLOR } from '../../../app/common/constant/pokemonTypeColor';

export default function PokemonList() {
  const dispatch = useAppDispatch();
  const { pokemons, isLoading } = useAppSelector(state => state.pokemon);

  React.useEffect(() => {
    dispatch(listPokemonsAsync());
  }, [dispatch]);

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth='md'>
        <Grid container spacing={4}>
          {!isLoading && (
            <Fragment>
              {pokemons.map((tempPokemon, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: (POKEMON_TYPE_COLOR as any)[tempPokemon.type] || 'red'
                    }}
                  >
                    <CardMedia
                      component='img'
                      image={tempPokemon.sprites.front_default}
                      alt='random'
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant='h5'
                        component='h2'
                        style={{ textTransform: 'uppercase' }}
                      >
                        {tempPokemon.name}
                      </Typography>
                      <Typography>Pokemon:{tempPokemon.name}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small'>View</Button>
                      <Button size='small'>Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Fragment>
          )}
          {isLoading && (
            <Grid
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              item
              xs={12}
            >
              <CircularProgress />
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
}
