import { useState, createContext } from 'react'
export const GlobalContext = createContext();

function GlobalContextProvider(props) {

    const [user, setUser] = useState(false);
    const [count, setCount] = useState(0);
    const [register, setRegister] = useState([]);
   

    const initialValue = { 
        email: "", 
        password: "" ,
        token:"",
    }


    // useEffect(() => {
    //    localStorage.setItem("task", JSON.stringify(register))
    // }, [register])

    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1)
    }

    const values = { count, increase, decrease, register, setRegister, user, setUser, initialValue }


    return (
        <GlobalContext.Provider value={values}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalContextProvider;

