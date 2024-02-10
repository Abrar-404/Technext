import Banner from '../../Banner/Banner';
import UserCardFunc from '../Users/UserCardFunc';
import '../../Styles/text.css';
import UserForm from '../../UserForm/UserForm';
import NewUsersFunc from '../../NewUsers/NewUsersFunc';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mt-32">
        <h1 className="flex justify-center text-3xl font-fancy text-flicker-in-glow font-bold">
          Existing Users
        </h1>
        <UserCardFunc></UserCardFunc>
        <div id="" className="mt-96">
          <h1 className="flex justify-center text-3xl font-fancy text-flicker-in-glow font-bold">
            Add New Users
          </h1>
          <div className="mb-96">
            <UserForm></UserForm>
          </div>
        </div>

        <div className="mt-96">
          <h1 className="flex justify-center text-3xl font-fancy text-flicker-in-glow font-bold pt-32 mt-20">
            New Users
          </h1>
          <NewUsersFunc></NewUsersFunc>
        </div>
      </div>
    </div>
  );
};

export default Home;
