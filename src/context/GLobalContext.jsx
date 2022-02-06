import { useState, createContext } from 'react'
export const GlobalContext = createContext();

function GlobalContextProvider(props) {

    const [count, setCount] = useState(0);
    const [register, setRegister] = useState([]);

    const initialValue = { email: "", password: "" }



    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1)
    }

    const value = { count, increase, decrease, register, setRegister, initialValue }


    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalContextProvider;

