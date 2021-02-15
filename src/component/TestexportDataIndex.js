import React,{useState, useEffect} from 'react';
import axios from 'axios';
const TestexportDataIndex =(props) => {

    const [user,setUser] =useState({})

    useEffect(()=>{
        axios.get("/user/"+props.match.params.id)
        .then(response =>{
            console.log(response.data.data);
            console.log(response.data.status);
            setUser(response.data.data);
        })
    },[])

    return <div className="paddingNow">
                <h1>{props.match.params.id}</h1>
                <p>{user.firstName}</p>
        </div>
}
export default TestexportDataIndex;