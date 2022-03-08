import { FunctionComponent } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';
interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
  return (
    <>
      <AppBar position='absolute'>
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant='h6' color='inherit' noWrap>
            Pokemon
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
