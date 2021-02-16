import React,{useState,useEffect} from "react";
import Firebase from './Firebase';
import axios from "axios";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Collapse } from 'react-bootstrap';

const PrintingOrder =(props)=>{

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
                // window.location.href="/";
              }
              else{
                alert.log(data.status.message)
              }
            })
        });
    }

    const handleChange = (e) =>{
      this.setState({value: e.target.value});
    }

    const [open, setOpen] = useState(false);

    return(
      <div>
        <div className="orderbackground">
          <p className="headingorder">NEW ORDER</p>
          <p className="subheadingorder">* Printing *</p>
        </div>
        <div className="requirbackground">
          <br/>
          <div className="paddingorder1">
            <p>Choose your printing type.</p>
            <p className="redrequir">Upload your file *</p>
            <form onSubmit={UploadFile}>
                <input type="file" onChange={onFileChange}/>
                <button type="submit"> Upload FIle</button>
            </form>
            <br/>

            <hr/>
            <p className="redrequir">Basic requirement *</p>
            <p>หน้า
                <span>
                <select>
                    <option>ทั้งหมด</option>
                    <option>กำหนด</option>
                </select>
                </span>
                <span className="padding-sameline">{' '} จำนวนชุด
                  <span>
                    <input className="numberTextfield" type="number"></input>
                  </span>
                </span>
                <span className="padding-sameline">{' '} สี
                  <span className="colorTextfield">
                    <select>
                        <option>สี</option>
                        <option>ขาว-ดำ</option>
                    </select>
                  </span>
                </span>
            </p>
          </div>
          
          <div className="paddingorder2">
            <hr/>
            <p className="redrequir">Advance requirement * 
              <span>
                <Button
                  className = "advanceButton"
                  variant="secondary"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  +
                </Button>
              </span>
            </p>
            <Collapse in={open}>
              <p>ขนาดกระดาษ
                  <span>
                  <select>
                      <option>A0</option>
                      <option>A1</option>
                      <option>A2</option>
                      <option>A3</option>
                      <option>A4</option>
                      <option>A5</option>
                      <option>A6</option>
                      <option>A7</option>
                      <option>A8</option>
                      <option>A9</option>
                      <option>A10</option>
                  </select>
                  </span>
              </p>              
            </Collapse>
            <Collapse in={open}>
              <p>จำนวนหน้าต่อแผ่น
                <span>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>4</option>
                    <option>6</option>
                    <option>9</option>
                    <option>16</option>
                </select>
                </span>
              </p>
            </Collapse>
            <Collapse in={open}>
              <p>ระยะขอบ
                <span>
                <select>
                    <option>ไม่มี</option>
                    <option>ค่าเริ่มต้น</option>
                    <option>ขั้นต่ำ</option>
                    <option>กำหนดเอง</option>
                </select>
                </span>
              </p>
            </Collapse>
            <Collapse in={open}>
              <p>ปรับขนาด
                <span>
                <select>
                    <option>ค่าเริ่มต้น</option>
                    <option>ที่กำหนดเอง</option>
                </select>
                </span>
              </p>
            </Collapse>
            <Collapse in={open}>
              <p>สองด้าน
                <Form.Check aria-label="option 1" label=" พิมพ์ทั้งสองด้าน"/>
              </p>
            </Collapse>
            <Collapse in={open}>
              <p>ตัวเลือก
                <Form.Check aria-label="option 1" label=" กราฟิกพื้นหลัง"/>
              </p>
            </Collapse>  
          </div>
          
          <div className="paddingorder3">
            <hr/>
            <p className="redrequir">Bookbinding requirement *</p>
            <p>ชนิดกระดาษ(ภายใน)
                <span>
                <select>
                    <option>กระดาษแอร์เมล์  0.2บาท</option>
                    <option>กระดาษฟอกขาว  0.5บาท</option>
                    <option>กระดาษปรู๊ฟ  0.5บาท</option>
                    <option>กระดาษถนอมสายตา 0.5บาท</option>
                    <option>กระดาษอาร์ตมัน  1บาท</option>
                    <option>กระดาษอาร์ตด้าน 1บาท</option>
                    <option>กระดาษอาร์ตการ์ด1หน้า  1บาท</option>
                    <option>กระดาษอาร์ตการ์ด2หน้า  1บาท</option>
                    <option>กระดาษการ์ด  1.5บาท</option>
                    <option>กระดาษแข็ง 1.5บาท</option>
                    <option>กระดาษปอนด์  2บาท</option>
                    <option>กระดาษแบงค์  3บาท</option>
                    <option>กระดาษแฟนชี  3บาท</option>
                </select>
                </span>
                <span className="redrequir">
                (ราคา:แผ่น*)
                </span>
            </p>
            <p>สีกระดาษหน้าปก
                <span>
                <select>
                    <option>ขาว</option>
                    <option>ดำ</option>
                    <option>แดง</option>
                    <option>น้ำเงิน</option>
                    <option>ชมพู</option>
                    <option>ม่วง</option>
                    <option>ฟ้า</option>
                    <option>เหลือง</option>
                    <option>ส้ม</option>
                    <option>เขียวอ่อน</option>
                    <option>เขียวแก่</option>
                    <option>เขียวเข้ม</option>
                </select>
                </span>
            </p>
            <p>เลือกรูปแบบเข้าเล่ม
                <span>
                <select>
                    <option>แบบเย็บมุมหลังคา 0บาท</option>
                    <option>แบบสันพลาสติก 5บาท</option>
                    <option>แบบสันกาว  50บาท</option>
                    <option>แบบไสกาว  50บาท</option>
                    <option>แบบเข้าห่วง 50บาท</option>
                    <option>แบบกาวหัว  100บาท</option>
                    <option>แบบเย็บกี่ 100บาท</option>
                </select>
                </span>
            </p>
            </div>
          </div>
          

        <div className="pricebackground">
          <hr/>
          <div>
            <p className="result-position-1">ราคาต่อชุด
              <span>
                <input className="resultTextfield" type="number" disabled></input>
              </span>
              <span>
                บาท
              </span>
            </p>
            <p className="result-position-2">จำนวนชุด
              <span>
                <input className="resultTextfield" type="number" disabled></input>
              </span>
              <span>
                ชุด
              </span>
            </p>
            <p className="result-position-1">ราคารวม
              <span>
                <input className="resultTextfield" type="number" disabled></input>
              </span>
              <span>
                บาท
              </span>
            </p>
          </div>
          <div className="resultButton-position">
            <input type="submit" value="ยืนยันคำสั่งซื้อ"/>
          </div>
          <p className="redrequir-price">Message : เมื่อลูกค้าได้ทำการยืนยันคำสั่งซื้อแล้ว ทางร้านเราจะมอบหมายเลขลำดับคิวของท่านลูกค้าให้ โปรดให้ท่านลูกค้าทำการตรวจสอบหมายเลขคิวและนำหมายเลขมายื่นให้ที่ร้านเพื่อทำการรับเอกสารของท่าน ขอขอบคุณที่ใช้บริการ</p>
        </div>
      </div>
    )
}

export default PrintingOrder;