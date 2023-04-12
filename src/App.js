import React, { useState } from 'react';
import './style.css';
import ImgUpload from './img-upload/img-upload';
import UserList from './user-list/user-list';

export default function App() {
  return (
    <>
      <h1>Hello StackBlitz!</h1>
      <ImgUpload />
      {/* <UserList /> */}
    </>
  );
}
