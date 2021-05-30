import React, { useState } from 'react';
import Profile from './Profile';
import Search from './Search';

const User = () => {
  //declara el estasdo
  const [userData, setUserData] = useState({
    name: '',
    displayUser: false,
  });

  //crea un evento que captura las props y las agrega al estado
  const handleChange = (event) => {
    setUserData({
      name: event.target.value,
    });
  };

  //modifica el estado para desplegar el componente Profile
  const handleSubmit = (event) => {
    event.preventDefault();
    setUserData({
      ...userData,
      displayUser: true,
    });
  };

  return (
    <>
      <Search
        data={userData}
        onChange={(event) => handleChange(event)}
        onSubmit={(event) => handleSubmit(event)}
      />
      {userData.displayUser === true && (
        <Profile
          nickName={userData.name}
          display={userData.displayUser}
        />
      )}
    </>
  );
};

export default User;
