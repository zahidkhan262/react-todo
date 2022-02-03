import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalContextProvider from '../context/GLobalContext';
import Todo from '../components/todo';
import Practise from '../modals/Practise'
import Home from '../auth/Home';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import MenuBar from '../auth/MenuBar';
import Counter from '../context/Counter';
import CompoA from '../context/CompoA'

const RouterConfig = () => {
    return (   <>
  <GlobalContextProvider>
      <BrowserRouter>
      <MenuBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/modal" element={<Practise />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

      </BrowserRouter>
        
    <Counter />
    <CompoA />
  </GlobalContextProvider>


    </> );
}
 
export default RouterConfig;