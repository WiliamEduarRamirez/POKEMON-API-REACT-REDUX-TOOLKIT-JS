import React from 'react';
import { Pokemon } from '../ _core/domain/entity/Pokemon';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { POKEMON_TYPE_COLOR } from '../../../app/common/constant/pokemonTypeColor';

interface PokemonListItemProps {
  pokemon: Pokemon;
}

const PokemonListItem = ({ pokemon }: PokemonListItemProps) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: (POKEMON_TYPE_COLOR as any)[pokemon.type] || 'red'
      }}
    >
      <CardMedia component='img' image={pokemon.sprites.front_default} alt='random' />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant='h5' component='h2' style={{ textTransform: 'uppercase' }}>
          {pokemon.name}
        </Typography>
        <Typography>Pokemon:{pokemon.name}</Typography>
      </CardContent>
      <CardActions style={{ display: 'block', textAlign: 'center' }}>
        <Button size='small' variant={'contained'} color={'primary'}>
          View
        </Button>
        <Button size='small' variant={'outlined'} color={'error'}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default PokemonListItem;
