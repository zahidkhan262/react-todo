import axios from 'axios';
import { useEffect , useState } from 'react';
import MyTable from './MyTable';
import Loading from './Loading'


const Data = () => {

    const API_URL="https://jsonplaceholder.typicode.com/todos";


    const [apiData, setApiData] = useState([])


    const columns=["Action", "Id", "Title"];


    const fetchData=()=>{
        axios.get(API_URL).then((response)=>{
            let res=response.data;
            let err = response.data.error;
            console.log(err);
            setApiData(res)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])
    
  return (
      <>
      {apiData && apiData.length ?
      <MyTable col={columns} row={apiData}  />
      :<Loading  />
    }
      </>
  )
};

export default Data;
