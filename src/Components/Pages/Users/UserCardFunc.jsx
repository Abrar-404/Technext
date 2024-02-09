import React, { useEffect, useState } from 'react';
import '../../Styles/input.css';
import UsersCard from './UsersCard';

const UserCardFunc = () => {
  const [usersFunc, setUsersFunc] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => setUsersFunc(data.users));
  }, []);

  return (
    <div>
      <div className='mt-32'>
        <div class="input-container mx-auto">
          <input type="text" placeholder="Search Here" />
          <button class="button">SEARCH</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-5 mt-32">
        {usersFunc?.map(userInfo => (
          <UsersCard key={userInfo?.id} usersInfo={userInfo}></UsersCard>
        ))}
      </div>
    </div>
  );
};

export default UserCardFunc;
