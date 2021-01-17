import React,{useState} from "react";
import Firebase from './Firebase';
import {Link} from 'react-router-dom';
import axios from "axios";

const SignUp = (props)=>{

    const [firstname,setFirstName] = useState("");
    const [lastname,setLastName] = useState("");
    const [userName,setUserName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [repass,setRepass] = useState("");
    
    //const [user,setUser] = useState(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(password !== repass){
          alert("Password is not same.")
        }
        else{
          console.log(email,password);
          Firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => {
            // Signed in 
            // ...
            console.log(user.user.uid);
            axios.post('/user/create',
            {
              id: user.user.uid,
              firstName: firstname,
              lastName: lastname,
              userName: userName,
              phone: phone,
              email: email,
              password: password
            }).then(response => {
              const {data} = response
              if(data.status.code === 1000){
                alert("Sigu up success!!")
                window.location.href="/";
              }
              else{
                alert.log(data.status.message)
              }
            })

          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            alert(errorMessage)
          });
        }
    }

    return(
        <div className="loginBackground">
            <p className="loginParagraph">SIGN UP</p>
            <p className="subloginParagraph1">Already a member? <span>
                <Link to="/login"> 
                  Login
                </Link></span>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="emailBox">
                <input className="loginTextfield" type="text" placeholder="FirstName" value={firstname} onChange={(e) => {setFirstName(e.target.value)}} required />
              </div>

              <div className="emailBox">
                <input className="loginTextfield" type="text" placeholder="LastName" value={lastname} onChange={(e) => {setLastName(e.target.value)}} required />
              </div>

              <div className="emailBox">
                <input className="loginTextfield" type="text" placeholder="Username" value={userName} onChange={(e) => {setUserName(e.target.value)}} required/>
              </div>

              <div className="emailBox">
                <input className="loginTextfield" type="text" placeholder="Phone" value={phone} onChange={(e) => {setPhone(e.target.value)}} required />
              </div>

              <div className="emailBox">
                <input className="loginTextfield" type="email" placeholder="Email address" value={email} onChange={(e) =>{setEmail(e.target.value)}} required />
              </div>

              <div className="passwordBox">
                <input className="loginTextfield" type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
              </div>

              <div className="passwordBox">
                <input className="loginTextfield" type="password" placeholder="Confirm Password" value={repass} onChange={(e)=>{setRepass(e.target.value)}} required/>
              </div>

              <div className="submitBox">
                <input className="loginSubmit" type="submit" value="Sign up"/>
              </div>
              <p className="subloginParagraph2">Forgot password? <span>
                    <Link to="/login">
                    Click
                    </Link></span>
                </p> 
            </form>
            <hr/>
        </div>     
    )
}
export default SignUp;