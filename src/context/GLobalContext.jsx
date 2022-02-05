import {useState, createContext,useContext} from 'react'

export const GlobalContext= createContext();

export default  function GlobalContextProvider(props){

    const [user, setUser] = useState(null);
    

    const [count, setCount] = useState(0);
    const [register, setRegister] = useState([]);
    const initialValue={ email: "", password: "" }


    const handleLogin=()=>{
        setUser(true)
    }
    

    const handleLogout=()=>{
        setUser(false)
    }
    

    const increase=()=>{
        setCount(count +1)
    }
    const decrease=()=>{
        setCount(count -1)
    }

    const value={count, increase, decrease, register, setRegister,user, setUser,handleLogin,handleLogout,initialValue}

    return(
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export const useAuth=()=>{
    return useContext(GlobalContext)
}
