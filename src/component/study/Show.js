// import React, { Component } from "react";
// import axios from "axios";

// class Show extends Component{

//     constructor(props){
//         super(props);
//         this.state={
//             data : {}
//         }
//     }

//     componentDidMount(){
//         axios.get('https://covid19.th-stat.com/api/open/timeline')
//         .then((response) =>{
//             console.log(response.data.Data)
//             this.setState({
//                 data : response.data.Data[this.props.match.params.index]
//             })
//         })
//     }

//     render(){
//         console.log(this.props)
//         return(
//             <div>
//                <h1>SHOW</h1>
//                <p>{this.props.match.params.index}</p>
//                <p>{this.state.data.Date}</p>
//             </div>
//         )
//     }
// }
// export default Show;






import React, {useState,useEffect} from "react";
import axios from "axios";

const Show =(props)=>{
    const[data,setData] = useState({});
    useEffect(() =>{
        axios.get('https://covid19.th-stat.com/api/open/timeline')
        .then((response) =>{
            setData(response.data.Data[props.match.params.index]);
        })
    },[])

    return(
        <div>
            <h1>SHOW</h1>
            <p>{props.match.params.index}</p>
            <p>{data.Date}</p>
        </div>
    )
}
export default Show;



{/* <Route path="/about" component={About}/>
              <Route path="/service" component={Service}/>
              <Route path="/openingHours" component={OpeningHours}/>
              <Route exact path="/" component={List} />
              <Route path="/covid/:index" component={Show} />
              <Route path="/create" component={Create}/>
              <Route path="/covid" component={List}/> */}