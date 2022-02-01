import React from 'react';
import { UserConsumer } from './userContext';
const CompoA = () => {
  return (
      <>
      <UserConsumer>
          {
              username=>{
                  return <h1>what's name {username}</h1>
              }
          }
      </UserConsumer>     
      </>
  )
};

export default CompoA;
