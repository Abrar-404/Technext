import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from './../Navbar/Navbar';

const MainLayout = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className='mt-32'>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
