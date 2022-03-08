import { Outlet } from 'react-router-dom';
import NavBar from './Navbar';
function MainLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
