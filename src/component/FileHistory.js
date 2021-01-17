import React, { useState, useEffect } from "react"
import Firebase from './Firebase';
import { Button, Modal } from 'react-bootstrap';
import axios from "axios";

const FileHistory =(props)=> {
    
    const [fileStorage,setFileStorage] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [modalindex,setModalIndex] = useState("");
    const [user,setUser] = useState(null);
    
    useEffect(()=>{
        Firebase.auth().onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            if (currentUser) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              axios.get('/user-file/' + currentUser.uid)
              .then(response =>{
                  const {data} = response;
                  if(data.status.code === 1000){
                    setFileStorage(data.data.fileStorages)
                  }
              })
              // ...
            } else {
              // User is signed out
              // ...
             window.location.href="/"
            }
          });
    },[])

    const setToModal = (id) => {
        setModalShow(true) 
        setModalIndex(id)
        console.log(id)
    }

    return(
        <div className="historyList">
            <div>
                

                <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">File name</th>
                        <th scope="col">Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fileStorage.length ==0 ? <div>No Record Found</div>: fileStorage.map((file,index)=>{
                            return <tr>
                                        <th scope="row">{index}</th>
                                        <td>{file.fileName}</td>
                                        <td>
                                            <Button variant="primary" >
                                                See More
                                            </Button>
                                            
                                        </td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
            {/* <MyVerticallyCenteredModal
                index= {modalindex}
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}
            
            </div>
        </div>
    )
}

export default FileHistory;

// function MyVerticallyCenteredModal(props) {

//     const [fileStorage,setFileStorage] = useState();

//     useEffect(()=>{
//         console.log('/file/'+ props.index)
//         axios.get('/file/'+ props.index)
//         .then(response =>{
//             const {data} = response;
//             if(data.status.code === 1000){
//                 console.log(data.data)
//                 setFileStorage(data.data)
//               }
//         })
    
//     },[props])

    
//     if(fileStorage == null){
//         return <div></div>
//     }
//     return <Modal
//     {...props}
//     size="lg"
//     aria-labelledby="contained-modal-title-vcenter"
//     centered
//   >
//     <Modal.Header closeButton>
//       <Modal.Title id="contained-modal-title-vcenter">
//         {fileStorage}
//       </Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       <h4>Centered Modal</h4>
//       <embed />
//     </Modal.Body>
//     <Modal.Footer>
//       <Button onClick={props.onHide}>Close</Button>
//     </Modal.Footer>
//   </Modal>
//   }
