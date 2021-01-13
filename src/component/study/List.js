import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const CovidDate = (props) =>{
    return(
        <div>
            <p>{props.index}</p>
            <p>Date : {props.data.Date}</p>
            <p>New Confirmed : {props.data.NewConfirmed}</p>
            <Link to={"/covid/"+props.index}>
                <button>
                    <Button variant="secondary">Info</Button>
                </button>
            </Link>
            <hr/>
        </div> 
    )
}

class List extends Component{

    constructor(props){
        super(props);
        this.state={
            api:[]
        }
    }

    componentDidMount(){
        axios.get('https://covid19.th-stat.com/api/open/timeline')
        .then((response) =>{
            console.log(response.data.Data)
            this.setState({
                api : response.data.Data
            })
        })
    }

    onDateClick = (e) => {

    }

    render(){
        return(
             <div>
                {this.state.api.map((key,index)=>{
                    return(
                        <CovidDate key={index} data={key} index={index}/>
                    )  
                })}
            </div>
        )
    }
}
export default List