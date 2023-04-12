import React, { useState } from 'react';
import Delete from './delete-button';

export default function UserList() {
  // ========testing delete from child================
  let [data, setData] = useState([
    { name: 'Nilesh', age: 20 },
    { name: 'Singh', age: 20 },
    { name: 'Rajput', age: 20 },
  ]);
  let myTabel = data.map(function (e) {
    return <p>{e.name}</p>;
  });

  function deleteButton(index) {
    console.log('index =>', index);
    console.log('delete clicked');
    let test = data.splice(index, 1);
    console.log('data=>', data);
    setData([...data]);
  }
  return (
    <>
      {/* =========== testing delete from child=============== */}
      {data.map((e, index) => (
        <>
          <p>{e.name}</p>
          <Delete props={{ deleteButton, index }} />
        </>
      ))}
    </>
  );
}
