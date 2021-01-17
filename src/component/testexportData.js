import React, {useState,useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const TestexportData =(props)=>{
    const[data,setData] = useState([]);
    useEffect(() =>{
        axios.get('/user/all')
        .then((response) =>{
            console.log(response.data)
            setData(response.data.data.users)
        })
    },[])

    return(
        <div>
            {data.map((user) => {
                return <Link to={"/exportdata/"+user.id}>{user.id} || {user.firstName} || {user.lastName} <br/></Link>
            } )}
        </div>
    )
}
export default TestexportData;