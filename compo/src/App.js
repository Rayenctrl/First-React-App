import React from 'react';
import ProfilPhoto from './Component/Profile/ProfilPhoto'
import FullName from './Component/Profile/FullName'
import Address from './Component/Profile/Adress'
import './App.css';

function Profil() {
  return (
    <React.Fragment>
      <ProfilPhoto />
      <FullName />
      <Address />
    </React.Fragment>
  );
}

export default Profil;
