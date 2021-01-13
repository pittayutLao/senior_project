import React, { Component } from "react";

class Test extends Component{

    constructor(props){
        super(props);

        this.state={
            title : 'Test Component',
            description: "2nd Component",
            status: 1,
            count : 0,
            inputText: "",

        }
    }

    handleClick1 = (e) =>{
        this.setState({
            count : this.state.count-1
        })
    }
    handleClick2 = (e) =>{
        this.setState({
            count : this.state.count+1
        })
    }

    onInputChange = (e) =>{
        console.log(e)
        this.setState({
            inputText: e.target.value
        })
    }
    
    onInputChange3 = (e) =>{
        console.log(e)
        this.props.onInputChange2(e)
      }

    render(){
        return(
            <div>
                <h1>{this.props.data}</h1>

                <input type="text" 
                    value={this.props.text}
                    onChange={this.onInputChange3}/>

                <h2>Test Component</h2>
                <p>Title is : {this.state.title}</p>
                <p>Description : {this.state.description}</p>
                <p>Status : {this.state.status}</p>

                <h3>This State : {this.state.count}</h3>
                <button onClick={this.handleClick1}>
                    -
                </button>
                <button onClick={this.handleClick2}>
                    +
                </button>
                <input type="text" 
                onChange={this.onInputChange}
                value={this.state.inputText}
                ></input>


            </div>
        )
    }
}
export default Test;