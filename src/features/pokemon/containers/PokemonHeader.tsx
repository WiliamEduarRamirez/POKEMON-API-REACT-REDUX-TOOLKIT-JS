import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  TextField
} from '@mui/material';
import { useState } from 'react';

const post = {
  title: 'Pokémon',
  description: 'Haciendo mi pokedex, con React, Redux Toolkit, Material UI',
  image: require('../../../app/assets/images/logo-pokemon.jpg'),
  imageText: 'main image description',
  linkText: 'Continue reading…'
};

export default function PokemonHeader() {
  const [itemsPerPage, setItemsPerPage] = useState<string>('5');

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event);
    setItemsPerPage(event.target.value);
  };

  return (
    <>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mt: 4,
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${post.image})`
        }}
      >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)'
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 }
              }}
            >
              <Typography component='h1' variant='h3' color='inherit' gutterBottom>
                {post.title}
              </Typography>
              <Typography variant='h5' color='inherit' paragraph>
                {post.description}
              </Typography>
              <Link variant='subtitle1' href='#'>
                {post.linkText}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Grid sx={{ mb: 3 }} container>
        <Grid item sx={{ mt: 2 }} xs={12} sm={4} md={5}>
          <TextField fullWidth label='Buscar Pokémon' variant='outlined' size={'small'} />
        </Grid>
        <Grid item sx={{ display: 'flex', justifyContent: 'center', mt: 2 }} xs={12} sm={8} md={7}>
          <FormControl variant={'outlined'} size={'small'} sx={{ minWidth: 60 }}>
            <InputLabel id='demo-simple-select-autowidth-label'>Total</InputLabel>
            <Select
              labelId='demo-simple-select-autowidth-label'
              id='demo-simple-select-autowidth'
              value={itemsPerPage}
              onChange={handleChange}
              autoWidth
              label='Total'
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </FormControl>

          <Pagination
            color={'primary'}
            sx={{ mt: 0.5, ml: 2 }}
            count={10}
            variant='outlined'
            shape='rounded'
            boundaryCount={1}
          />
        </Grid>
      </Grid>
    </>
  );
}
