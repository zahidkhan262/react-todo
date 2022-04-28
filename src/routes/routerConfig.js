import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalContextProvider from '../context/GLobalContext';
import Todo from '../components/todo';
import Practise from '../modals/Practise'
import Home from '../auth/Home';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import MenuBar from '../auth/MenuBar';
import Counter from '../context/Counter';
import NotFound from '../NotFound';
import ProtectedRouter from '../auth/ProtectedRouter'
import Data from '../api/Data';
import FormValidation from '../FormValidation';
import ApiData from '../classComponents/ApiData'

const RouterConfig = () => {
  return (
    <>
      <GlobalContextProvider>
        <BrowserRouter>
          <MenuBar />
          <Routes>
            <Route path="/" element={<ProtectedRouter />} >
              <Route exact path="/" element={<Home />} />
              <Route path="/modal" element={<Practise />} />
              <Route path="/api" element={<Data />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/todo" element={<Todo />} />
            </Route>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
            <Route path='/form' element={<FormValidation />} />
            <Route path='/card' element={<ApiData />} />

          </Routes>
          
        </BrowserRouter>
      </GlobalContextProvider>
    </>
  );

}
export default RouterConfig;