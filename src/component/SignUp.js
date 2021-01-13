import React,{useState} from "react";
import Firebase from './Firebase';

const SignUp = (props)=>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [user,setUser] = useState(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email,password);
        Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          // Signed in 
          // ...
          console.log(user);
          window.location.href="/";
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
    }

    return(
        <div>
            <h1>SIGN-UP</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Please Enter your Email" value={email} onChange={(e) =>{setEmail(e.target.value)}}/>
            <input type="password" placeholder="Enter your Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <input type="submit" value="Login"/>
        </form>
        </div>
        
    )
}
export default SignUp;