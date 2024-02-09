import React, { useEffect, useState } from 'react';

const UserCardFunc = () => {
  const [usersFunc, setUsersFunc] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => setUsersFunc(data.users));
  }, []);

  return (
    <div>
      {/* Map through the 'usersFunc' array */}
      {usersFunc?.map(user => (
        <div key={user.id}>
          <h1>
            {user.firstName} {user.lastName}
          </h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default UserCardFunc;
