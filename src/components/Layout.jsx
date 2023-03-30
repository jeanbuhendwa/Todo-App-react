import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const Layout = () => (
  <>
    <Navbar />
    <div className="wrapper">
      <Outlet />
    </div>
  </>
);
export default Layout;
