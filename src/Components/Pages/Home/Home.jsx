import Banner from '../../Banner/Banner';
import Navbar from '../../Navbar/Navbar';
import UserCardFunc from '../Users/UserCardFunc';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <UserCardFunc></UserCardFunc>
    </div>
  );
};

export default Home;
