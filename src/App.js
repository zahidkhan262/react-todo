import './App.css';
import RouterConfig from './routes/routerConfig';
import { ToastContainer } from 'react-toastify';
import ReduxCounter from './redux/ReduxCounter';
import { Provider } from 'react-redux';
import store from './redux/store';



function App() {



  return (
    <>

      <RouterConfig />

      <Provider store={store}>
          <ReduxCounter />
      </Provider>



      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
