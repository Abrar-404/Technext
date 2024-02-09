import Banner from '../../Banner/Banner';
import UserCardFunc from '../Users/UserCardFunc';
import '../../Styles/text.css'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mt-32">
        <h1 className="flex justify-center text-3xl font-fancy text-flicker-in-glow font-bold">
          Existing Users
        </h1>
        <UserCardFunc></UserCardFunc>
      </div>
    </div>
  );
};

export default Home;
