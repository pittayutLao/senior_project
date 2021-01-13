import React from "react";
import {Link} from 'react-router-dom';
import Firebase from "./Firebase";
import background from "../image/background-1.jpg";

const MainHome = (props)=>{

    const onLogout =(e) =>{
        e.preventDefault();
        Firebase.auth().signOut().then(() => {
            // Sign-out successful.
            window.localtion.href = "/"
          }).catch((error) => {
            // An error happened.
          });
    }
    return(
        <div className="firstbackground">
            <p className="mainParagraph">My Site Welcomes You</p>
            <div class="subParagraph">
                <p>KU Printing Service</p>
                <p>The First Online Copy Shop</p>
            </div>
            
            <div className="descriptionParagraph">
                <p>
                Our Site has been proud to serve  all of the customers. We’re committed to not only providing quality products 
                and services, but going above and beyond to ensure our customers are completely satisfied. We welcome you to look 
                through our site to see all we have to offer.
                </p>       
            </div>

            

            <div className="loginsignupButton">
                {!Firebase.auth().currentUser ?
                    <Link to="/login" ><button className="loginButtonMainpage">LOGIN</button></Link> : <button className="loginButtonMainpage" onClick={onLogout}>LOGOUT</button>}{' '}
                    <Link to="/signUp"><button className="signupButtonMainpage">SIGN-UP</button></Link>
                
            </div> 

            <img className="imageMainpage" src={background}></img>

        </div>
    )
}
export default MainHome;