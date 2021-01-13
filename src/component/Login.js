import React,{useState,useEffect} from "react";
import Firebase from './Firebase';

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
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Please Enter your Email" value={email} onChange={(e) =>{setEmail(e.target.value)}}/>
            <input type="password" placeholder="Enter your Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <input type="submit" value="Login"/>
        </form>
    )
}
export default Login;