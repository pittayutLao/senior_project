import React,{useState,useEffect} from "react";
import Firebase from './Firebase';
import {Link} from 'react-router-dom';

const Login = (props)=>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [user,setUser] = useState(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email,password);
        Firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
             // Signed in 
             // ...
            console.log("Login")
            window.location.href = "/";

        })
        .catch((error) => {
             var errorCode = error.code;
             var errorMessage = error.message;
             console.log(errorMessage);
        });
    }

    useEffect(()=>{
        Firebase.auth().onAuthStateChanged((currentUser) => {
            if (currentUser) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              window.location.href="/"
              
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
    },[])



    return(
        <div className="loginBackground">
            <p className="loginParagraph">LOG IN</p>
            <p className="subloginParagraph1">New to this site? <span>
                <Link to="/signup">
                    Sign Up
                </Link></span>
            </p>

            <form onSubmit={handleSubmit}>
                <div className="emailBox">
                    <input className="loginTextfield" type="text" placeholder="Please Enter your Email" value={email} onChange={(e) =>{setEmail(e.target.value)}}/>
                </div>
                <div className="passwordBox">
                    <input className="loginTextfield" type="password" placeholder="Enter your Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div className="submitBox">
                    <input className="loginSubmit" type="submit" value="Login"/>
                </div> 
                <p className="subloginParagraph2">Forgot password? <span>
                    <Link>
                    Click
                    </Link></span>
                </p>  
            </form>  
            <hr/>
        </div> 
    )
}
export default Login;