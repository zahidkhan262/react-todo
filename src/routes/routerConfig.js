import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from '../components/Todo';
import Practise from '../modals/Practise'
import Home from '../auth/Home';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import MenuBar from '../auth/MenuBar';

const RouterConfig = () => {
    return (   <>
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
    </> );
}
 
export default RouterConfig;