import './App.css';
import { Component } from 'react';
import Navbar from "./component/Navbar";
import Firebase from './component/Firebase';

import MainHome from './component/MainHome';
import About from './component/About';
import Service from './component/Service';
import OpeningHours from './component/OpeningHours';
import Contact from "./component/Contact";
import {BrowserRouter as Router,Link,Route,Switch } from 'react-router-dom';
import Login from './component/Login'
import SignUp from './component/SignUp'

// import Test from './component/Test';
// import List from './component/List';
// import Show from './component/Show';
// import Create from './component/Create';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      text: 'ABC',
      user: null
    }
  }

  async componentDidMount(){
    await Firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = currentUser.uid;
        console.log(currentUser);
        this.setState({
          user : currentUser
        })
        // ...
      } else {
        // User is signed out
        // ...
        console.log(null);
        this.setState({
          user: null
        })
      }
    });
    await console.log(this.state.user);
  }

  
  onInputChange2 = (e) =>{
    console.log(e)
    this.setState({
        text: e.target.value
    })
  }

  render(){
    console.log(this.state.user)
    return(
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" >
            {/* <p>Test0.0.1</p> */}
            <div id="section1"> 
              <MainHome name="section1"/>
            </div>
            <div id="section2">
              <About name="section2"/>
            </div>
            <div id="section3">
              <Service name="section3"/>
            </div>
            <div id="section4">
              <OpeningHours name="section4"/>
            </div>
            <div id="section5">
              <Contact name="section5"/>  
            </div>
          </Route>

          <Route path="/login" component={Login}/>
          <Route path="/signUP" component={SignUp}/>
        </Switch>
      </Router>
    )}
}

export default App;
