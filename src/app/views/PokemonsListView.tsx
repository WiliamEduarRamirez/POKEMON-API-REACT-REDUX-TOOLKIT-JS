import PokemonHeader from '../../features/pokemon/containers/PokemonHeader';
import PokemonList from '../../features/pokemon/containers/PokemonList';
import { Container } from '@mui/material';

const PokemonsListView = () => {
  return (
    <>
      <Container sx={{ py: 8 }}>
        <PokemonHeader />
        <PokemonList />
      </Container>
    </>
  );
};

export default PokemonsListView;
