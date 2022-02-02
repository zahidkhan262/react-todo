import {useContext} from 'react';
import { GlobalContext } from './GLobalContext';

const Counter = () => {

    const {count, increase, decrease}=useContext(GlobalContext)

  return (
      <>
      <div className="container-1">
          <div className="sign_form">
              <p>This is Counter.js file</p>
              <h3>Counter:{count}</h3>
          </div>
          <div className="btn-1">
              <button onClick={increase}>Add</button>
              <button onClick={decrease}>Minus</button>
          </div>
          
      </div>
      </>
  )
};

export default Counter;
