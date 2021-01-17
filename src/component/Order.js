import React,{useState,useEffect} from "react";
import Firebase from './Firebase';
import axios from "axios";

const Order =(props)=>{

    const [uploadFile,setUploadFile] = useState(null);
    const [user,setUser] = useState(null);


    useEffect(()=>{
        Firebase.auth().onAuthStateChanged((currentUser) => {
            if (currentUser) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              setUser(currentUser);
              // ...
            } else {
              // User is signed out
              // ...
             window.location.href="/"
            }
          });
    },[])

    const onFileChange = (e) => {
        console.log(e.target.files[0].name);
        setUploadFile(e.target.files[0]);
    }

    const UploadFile =(e) =>{
        e.preventDefault();
        // File or Blob named mountains.jpg
        var file = uploadFile

        // Create the file metadata
        var metadata = {
            contentType: 'image/jpeg'
            };

        // Upload file and metadata to the object 'images/mountains.jpg'
        var uploadTask = Firebase.storage().ref().child('upload/' + file.name).put(file);

        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);

            axios.post('/file/create',
            {
                fileName :uploadFile.name,
                path: downloadURL,
                userID: user.uid
            }).then(response =>{
                const {data} = response
              if(data.status.code === 1000){
                alert("Your file has been upload.")
                window.location.href="/";
              }
              else{
                alert.log(data.status.message)
              }
            })
        });

    }

    return(
        <form onSubmit={UploadFile}>
            <input type="file" onChange={onFileChange}/>
            <button type="submit"> Upload FIle</button>
        </form>
    )
}

export default Order;