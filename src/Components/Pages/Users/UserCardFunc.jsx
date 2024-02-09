// // import React, { useEffect, useState } from 'react';
// // import '../../Styles/input.css';
// // import UsersCard from './UsersCard';

// // const UserCardFunc = () => {
// //   const [usersFunc, setUsersFunc] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState('');

// //   useEffect(() => {
// //     fetch('https://dummyjson.com/users')
// //       .then(res => res.json())
// //       .then(data => setUsersFunc(data.users));
// //   }, []);

// //   const handleSearch = () => {
// //     // Filter users by name
// //     const filteredUsers = usersFunc.filter(
// //       user =>
// //         user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase())
// //     );
// //     setUsersFunc(filteredUsers);
// //   };

// //   return (
// //     <div>
// //       <div className="mt-32">
// //         <div class="input-container mx-auto">
// //           <input
// //             type="text"
// //             placeholder="Search Here"
// //             value={searchTerm}
// //             onChange={e => setSearchTerm(e.target.value)}
// //           />
// //           <button onClick={handleSearch} class="button">
// //             SEARCH
// //           </button>
// //         </div>
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-5 mt-32">
// //         {usersFunc?.map(userInfo => (
// //           <UsersCard key={userInfo?.id} usersInfo={userInfo}></UsersCard>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserCardFunc;

// import React, { useEffect, useState } from 'react';
// import '../../Styles/input.css';
// import UsersCard from './UsersCard';

// const UserCardFunc = () => {
//   const [usersFunc, setUsersFunc] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   useEffect(() => {
//     fetch('https://dummyjson.com/users')
//       .then(res => res.json())
//       .then(data => {
//         setUsersFunc(data.users);
//         setFilteredUsers(data.users);
//       });
//   }, []);

//   const handleSearch = () => {
//     const filteredUsers = usersFunc.filter(
//       user =>
//         user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredUsers(filteredUsers);
//   };

//   return (
//     <div>
//       <div className="mt-32">
//         <div className="input-container mx-auto">
//           <input
//             type="text"
//             placeholder="Search Here"
//             value={searchTerm}
//             onChange={e => setSearchTerm(e.target.value)}
//           />
//           <button className="button" onClick={handleSearch}>
//             SEARCH
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-5 mt-32">
//         {filteredUsers.map(userInfo => (
//           <UsersCard key={userInfo.id} usersInfo={userInfo}></UsersCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserCardFunc;

import React, { useEffect, useState } from 'react';
import '../../Styles/input.css';
import UsersCard from './UsersCard';

const UserCardFunc = () => {
  const [usersFunc, setUsersFunc] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showSearchedData, setShowSearchedData] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        setUsersFunc(data.users);
      });
  }, []);


const handleSearch = () => {
  if (searchTerm.trim() !== '') {
    const filteredUsers = usersFunc.filter(
      user =>
        (user.firstName &&
          user.lastName &&
          (
            user.firstName.toLowerCase() +
            ' ' +
            user.lastName.toLowerCase()
          ).includes(searchTerm.toLowerCase())) ||
        (user.firstName &&
          user.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (user.lastName &&
          user.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredUsers(filteredUsers);
    setShowSearchedData(true);
  } else {
    setFilteredUsers([]);
    setShowSearchedData(false);
  }
};
  return (
    <div>
      <div className="mt-32">
        <div className="input-container mx-auto">
          <input
            type="text"
            placeholder="Search Here"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button className="button" onClick={handleSearch}>
            SEARCH
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-5 mt-32">
        {showSearchedData
          ? filteredUsers.map(userInfo => (
              <UsersCard key={userInfo.id} usersInfo={userInfo}></UsersCard>
            ))
          : usersFunc.map(userInfo => (
              <UsersCard key={userInfo.id} usersInfo={userInfo}></UsersCard>
            ))}
      </div>
    </div>
  );
};

export default UserCardFunc;
