import { lazy } from 'react';
import MainLayout from '../layout/MainLayout';
import Loadable from '../../infrastructure/ui-component/Loadable';

const PokemonsListView = Loadable(lazy(() => import('../views/PokemonsListView')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'list',
      element: <PokemonsListView />
    }
  ]
};
export default MainRoutes;
