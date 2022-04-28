import { useContext } from 'react';
import { GlobalContext } from './GLobalContext';
const CompoA = () => {
  const { count } = useContext(GlobalContext)
  return (
    <>
      <p>Here we want to show my counter count by context </p>
      <h2>{count}</h2>
    </>
  )
};

export default CompoA;
