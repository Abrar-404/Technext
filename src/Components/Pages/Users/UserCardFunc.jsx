// import React, { useEffect, useState } from 'react';
// import '../../Styles/input.css';
// import UsersCard from './UsersCard';

// const UserCardFunc = () => {
//   const [usersFunc, setUsersFunc] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [showSearchedData, setShowSearchedData] = useState(false);

//   useEffect(() => {
//     fetch('https://dummyjson.com/users')
//       .then(res => res.json())
//       .then(data => {
//         setUsersFunc(data.users);
//       });
//   }, []);

// const handleSearch = () => {
//   if (searchTerm.trim() !== '') {
//     const filteredUsers = usersFunc.filter(
//       user =>
//         (user.firstName &&
//           user.lastName &&
//           (
//             user.firstName.toLowerCase() +
//             ' ' +
//             user.lastName.toLowerCase()
//           ).includes(searchTerm.toLowerCase())) ||
//         (user.firstName &&
//           user.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
//         (user.lastName &&
//           user.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
//     );
//     setFilteredUsers(filteredUsers);
//     setShowSearchedData(true);
//   } else {
//     setFilteredUsers([]);
//     setShowSearchedData(false);
//   }
// };

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
//         {showSearchedData
//           ? filteredUsers.map(userInfo => (
//               <UsersCard key={userInfo.id} usersInfo={userInfo}></UsersCard>
//             ))
//           : usersFunc.map(userInfo => (
//               <UsersCard key={userInfo.id} usersInfo={userInfo}></UsersCard>
//             ))}
//       </div>
//     </div>
//   );
// };

// export default UserCardFunc;

// import React, { useEffect, useState } from 'react';
// import '../../Styles/input.css';
// import UsersCard from './UsersCard';

// const UserCardFunc = () => {
//   const [usersFunc, setUsersFunc] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [sortBy, setSortBy] = useState('name'); // Default sorting by name
//   const [showSearchedData, setShowSearchedData] = useState(false);

//   useEffect(() => {
//     fetch('https://dummyjson.com/users')
//       .then(res => res.json())
//       .then(data => {
//         setUsersFunc(data.users);
//         setFilteredUsers(data.users); // Initially set filtered users to all users
//       });
//   }, []);

//   const handleSearch = () => {
//     const searchTermLowerCase = searchTerm.toLowerCase().trim();
//     if (searchTermLowerCase === '') {
//       setFilteredUsers(usersFunc); // Show all users if search term is empty
//       setShowSearchedData(false);
//     } else {
//       const filteredUsers = usersFunc.filter(
//         user =>
//           user.firstName.toLowerCase().includes(searchTermLowerCase) ||
//           user.lastName.toLowerCase().includes(searchTermLowerCase) ||
//           user.email.toLowerCase().includes(searchTermLowerCase) ||
//           user.companyName.toLowerCase().includes(searchTermLowerCase)
//       );
//       setFilteredUsers(filteredUsers);
//       setShowSearchedData(true);
//     }
//   };

//   const handleSort = e => {
//     const selectedSortBy = e.target.value;
//     setSortBy(selectedSortBy);

//     let sortedUsers = [...filteredUsers];
//     switch (selectedSortBy) {
//       case 'name':
//         sortedUsers.sort((a, b) =>
//           (a.firstName + ' ' + a.lastName).localeCompare(
//             b.firstName + ' ' + b.lastName
//           )
//         );
//         break;
//       case 'email':
//         sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
//         break;
//       case 'company':
//         sortedUsers.sort((a, b) =>
//           a.companyName.localeCompare(b.companyName?.name)
//         );
//         break;
//       default:
//         break;
//     }

//     setFilteredUsers(sortedUsers);
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

//       <div className="mt-4 mx-auto">
//         <select value={sortBy} onChange={handleSort}>
//           <option value="name">Sort by Name</option>
//           <option value="email">Sort by Email</option>
//           <option value="company">Sort by Company Name</option>
//         </select>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-5 mt-32">
//         {showSearchedData
//           ? filteredUsers.map(userInfo => (
//               <UsersCard key={userInfo.id} usersInfo={userInfo}></UsersCard>
//             ))
//           : filteredUsers.map(userInfo => (
//               <UsersCard key={userInfo.id} usersInfo={userInfo}></UsersCard>
//             ))}
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
  const [sortBy, setSortBy] = useState('name'); // Default sorting by name
  const [showSearchedData, setShowSearchedData] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        setUsersFunc(data.users);
        setFilteredUsers(data.users); // Initially set filtered users to all users
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

  const handleSort = e => {
    const selectedSortBy = e.target.value;
    setSortBy(selectedSortBy);

    let sortedUsers = [...usersFunc]; // Sort based on all users, not the filtered ones
    switch (selectedSortBy) {
      case 'name':
        sortedUsers.sort((a, b) =>
          (a.firstName + ' ' + a.lastName).localeCompare(
            b.firstName + ' ' + b.lastName
          )
        );
        break;
      case 'email':
        sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
        break;
      case 'company':
        sortedUsers.sort((a, b) =>
          a.company?.name.localeCompare(b.company?.name)
        );
        break;
      default:
        break;
    }

    setFilteredUsers(sortedUsers);
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

      <div className="mt-4 mx-auto">
        <select value={sortBy} onChange={handleSort}>
          <option value="name">Sort by Name</option>
          <option value="email">Sort by Email</option>
          <option value="company">Sort by Company Name</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-5 mt-32">
        {showSearchedData
          ? filteredUsers.map(userInfo => (
              <UsersCard key={userInfo.id} usersInfo={userInfo}></UsersCard>
            ))
          : usersFunc.map(
              (
                userInfo // Render original usersFunc if no search
              ) => (
                <UsersCard key={userInfo.id} usersInfo={userInfo}></UsersCard>
              )
            )}
      </div>
    </div>
  );
};

export default UserCardFunc;
