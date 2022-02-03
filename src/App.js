import './App.css';
import RouterConfig from './routes/routerConfig';
import { ToastContainer } from 'react-toastify';




function App() {
  return (<>
  <RouterConfig/>

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
