import React, { useEffect, useState } from 'react';
import '../../Styles/input.css';
import UsersCard from './UsersCard';

const UserCardFunc = () => {
  const [usersFunc, setUsersFunc] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [showSearchedData, setShowSearchedData] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        setUsersFunc(data.users);
        setFilteredUsers(data.users);
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

    let sortedUsers = [...filteredUsers];
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
    <div id='existingUser'>
      <div className="mt-32">
        <div className="inupi-container mx-auto">
          <input
            type="text"
            placeholder="Search Here"
            className="inupi"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button className="button" onClick={handleSearch}>
            SEARCH
          </button>
        </div>
      </div>

      <div className="mt-10 mx-auto flex justify-center">
        <select
          value={sortBy}
          onChange={handleSort}
          className="select select-primary w-full max-w-xs inupi"
          style={{
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(255, 255, 0, 0)',
          }}
        >
          <option disabled value="">
            Sort By
          </option>
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
          : filteredUsers.map(userInfo => (
              <UsersCard key={userInfo.id} usersInfo={userInfo}></UsersCard>
            ))}
      </div>
    </div>
  );
};

export default UserCardFunc;
