import { useEffect, useState } from 'react';
import NewUserCard from './NewUserCard';

const NewUsersFunc = () => {
  const [newUser, setNewUser] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setNewUser(data));
  }, [newUser]);

  return (
    <div id=''>
      <div className="mt-96 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-5">
        {newUser?.map(userNew => (
          <NewUserCard key={userNew?.id} userNew={userNew}></NewUserCard>
        ))}
      </div>
    </div>
  );
};

export default NewUsersFunc;
