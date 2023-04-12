import React from 'react';

export default function DeleteButton({ props }) {
  return (
    <>
      <button onClick={(event) => props.deleteButton(props.index)}>
        Delete
      </button>
    </>
  );
}
