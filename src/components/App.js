
import React from "react";
import './../styles/App.css';
import { useState,useEffect } from "react";
import axios from "axios";
import 'regenerator-runtime/runtime';


const App = () => {
  const[output,setOutput] = useState()
  const [fetching,setFetching] = useState(true);

  useEffect(()=>{
    const api = "https://dummyjson.com/products"
    const fetchData = async()=>{
      try{
        const response = await axios(api);
        setOutput(response.data)
      }catch(error){
        console.error("error fetching the products",error)
      }finally{
        setFetching(false)
      }
    }
    fetchData()

  },[])

  return (
    <div>
      <u>Output : </u>
       {fetching?<p>Loading...</p>:<div><h1>Data Fetched from Api</h1><pre>{JSON.stringify(output, null, 2)}</pre></div>}
    </div>
  )
}

export default App
