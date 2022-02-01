import React from 'react';
import { UserConsumer } from './userContext';

const CompoB = () => {
  return(
      <>
      <UserConsumer>
          { data=>{
              return <h1>This is compo B and {data}</h1>
          }}
      </UserConsumer>
      </>
  )
};

export default CompoB;
