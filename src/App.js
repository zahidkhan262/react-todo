import './App.css';
import RouterConfig from './routes/routerConfig';
import { ToastContainer } from 'react-toastify';
import ReduxCounter from './redux/ReduxCounter';
import { Provider } from 'react-redux';
import store from './redux/store';

function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        alert("You clicked outside of me!");
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function App() {
  return (
    <>
//     form
    import React, { useState } from 'react'

const useForm = () => {
    
    //Form values
    const [values, setValues] = useState({});
    //Errors
    const [errors, setErrors] = useState({});


  //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        //Let's set these values in state
        setValues({
            ...values,
            [name]:val,
        })

    }


    return {
        values,
        errors,
        handleChange,
    }
}

export default useForm
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
