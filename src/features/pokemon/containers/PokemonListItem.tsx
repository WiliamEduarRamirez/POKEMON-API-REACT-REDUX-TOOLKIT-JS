import React from 'react';
import { Pokemon } from '../ _core/domain/entity/Pokemon';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  useTheme
} from '@mui/material';
import { POKEMON_TYPE_COLOR } from '../../../app/common/constant/pokemonTypeColor';
import styled from 'styled-components';

interface PokemonListItemProps {
  pokemon: Pokemon;
}

const PokemonListItem = ({ pokemon }: PokemonListItemProps) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: (POKEMON_TYPE_COLOR as any)[pokemon.type] || 'red',
        border: `3px solid ${theme.palette.primary.main}`,
        borderRadius: '20px'
      }}
    >
      <CardMedia component='img' image={pokemon.sprites.front_default} alt='random' />
      <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
        <Typography
          gutterBottom
          variant='h5'
          component='h2'
          style={{ textTransform: 'uppercase', color: 'white' }}
        >
          {pokemon.name}
        </Typography>
        <Typography component={'span'} variant={'body2'}>
          <DivChip>
            {pokemon.types.map(tempType => (
              <Chip
                size={'medium'}
                key={tempType.type.name}
                label={tempType.type.name}
                color={'secondary'}
              />
            ))}
          </DivChip>
        </Typography>
      </CardContent>
      <CardActions style={{ display: 'block', textAlign: 'center' }}>
        <Button variant={'contained'} color={'primary'}>
          View
        </Button>
        <Button variant={'contained'} color={'error'}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default PokemonListItem;

/*const DivChip = styled('div')({
  '& :not(:last-child)': {
    marginRight: '15px'
  }
});*/

const DivChip = styled.div`
  text-transform: capitalize;
  & :not(:last-child) {
    margin-right: 15px;
  }
`;
