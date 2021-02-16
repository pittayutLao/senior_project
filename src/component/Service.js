import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Service =(props)=>{
    return(
        <div>
            <div className="thirdbackground">
                <p className="mainParagraphService">Our Services</p>
                <p className="subParagraphService">Here’s What We Provide</p>
            </div>
            <div className="thirdbackground2">
                <Carousel>
                    <Carousel.Item interval={1000}>
                    <img
                        className="first"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAABlBMVEVhYWFgYGAhn2p0AAACsUlEQVR4nO3d0W6jMBCFYfz+L10pqAT7TPAAgw3m/7TbCzS1xwdjpWm0O00AAOB+0lrvZm6CTABE4TxRZAIAAAA8TqrKC81va9rP5chEkYma5r/T/CUtIa2uLd3O15bWvyWBkfyPnH7Plje5inJKZV1RomszS0KXE+//zlVLzlV4Sm6jnok7tZOD3AeZAAdxxgIA8Hq8yAUQhfNEkQls+c5Ihq7tdUEmikwUmQDAdThIFZnAg32iyAQYX/05d5wEgx0WZAIgSuB5EtwZgBoePcGrG0UmikwUmSgyUWSiumRi/ca6MUd7rdLIJu3J0V6rNLJJe9rub/kCfBzdSt5BIjf1qQr/IK/LxDENmegg78kkdMH4sGIzb0jzzroxF0wmZFIgE0UmikwUmajXLdhhdyblC8ITzBY2SuoVZsnulforyeTNdmeSVn+WK9a1NBXv4ZUl30nTqky+Lb9cDlV+mzYpl+tL3J1JHLMFq6RewbMDAACGxusTRSaKTFSfTPb/bBTN0V2rMLJJe3K01yqNbNKeHP01CiObs6uildusxxwxu2hOaq5mY8Fb08AQklDA/rBvuHXRnDS/tlHhGOSBz475gaN6Jv63LAGXkG1z7nHZeAjcT0a9wv+rspMpnBxlLGSiyESRiSITRSbqdZHs3gQbpfWxnrHlIrskkyNjDZpJ+q1ecfc0ZmSi2mZyyRIu4nhrv1UrrZy7Wf4nwyt4eYeQSbRhFhJozEx4dqIVmQQMeH6Ia41y5wINs5sDkYkiE0UmikzU2zOx1k8mZOJBJopM1Nsz4TxRZAIgivOfMHgVzlNFJopMnu1z6yqfZXFVDHSEzsshkzX2iWKfKDJRZKIiMmn2/xmYHxTY6fou2yITAFE4TxSZqEaZPOrnHTKxJmqTyTzXZiOuCl7ba8WPTP4ArXcVk7RXZHkAAAAASUVORK5CYII="
                        
                        />
                        <Carousel.Caption className="serviceBack">
                        <p className="serviceHeading">Printing Service</p>
                        <br/>
                        <p className="serviceSubheading">- บริการพิมพ์เอกสาร</p>
                        <br/>
                        <p className="serviceParagraph">บริการพิมพ์เอกสารผ่านระบบออนไลน์ ที่จะช่วยให้ลูกค้าทุกท่านได้ทำการสั่งถ่ายเอกสารของตนผ่านทางเว็บไซต์ของเรา และแน่นอนว่านี่ไม่ใช่การสั่งถ่ายเอกสารทั่วไป เพราะทางเราจัดเตรียมให้ลูกค้ามีสิทธิในการเลือกและกำหนดรูปแบบในการถ่ายเอกสารด้วยตัวของงท่านเอง เพื่อให้ท่านลูกค้าสามารถกำหนดรูปแบบในงานถ่ายเอกสารของตนได้</p>
                        <br/>
                        <Link to="/printinglist"><Button variant="outline-dark">Order >></Button></Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                    <img
                        className="first"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAABlBMVEVhYWFgYGAhn2p0AAACsUlEQVR4nO3d0W6jMBCFYfz+L10pqAT7TPAAgw3m/7TbCzS1xwdjpWm0O00AAOB+0lrvZm6CTABE4TxRZAIAAAA8TqrKC81va9rP5chEkYma5r/T/CUtIa2uLd3O15bWvyWBkfyPnH7Plje5inJKZV1RomszS0KXE+//zlVLzlV4Sm6jnok7tZOD3AeZAAdxxgIA8Hq8yAUQhfNEkQls+c5Ihq7tdUEmikwUmQDAdThIFZnAg32iyAQYX/05d5wEgx0WZAIgSuB5EtwZgBoePcGrG0UmikwUmSgyUWSiumRi/ca6MUd7rdLIJu3J0V6rNLJJe9rub/kCfBzdSt5BIjf1qQr/IK/LxDENmegg78kkdMH4sGIzb0jzzroxF0wmZFIgE0UmikwUmajXLdhhdyblC8ITzBY2SuoVZsnulforyeTNdmeSVn+WK9a1NBXv4ZUl30nTqky+Lb9cDlV+mzYpl+tL3J1JHLMFq6RewbMDAACGxusTRSaKTFSfTPb/bBTN0V2rMLJJe3K01yqNbNKeHP01CiObs6uildusxxwxu2hOaq5mY8Fb08AQklDA/rBvuHXRnDS/tlHhGOSBz475gaN6Jv63LAGXkG1z7nHZeAjcT0a9wv+rspMpnBxlLGSiyESRiSITRSbqdZHs3gQbpfWxnrHlIrskkyNjDZpJ+q1ecfc0ZmSi2mZyyRIu4nhrv1UrrZy7Wf4nwyt4eYeQSbRhFhJozEx4dqIVmQQMeH6Ia41y5wINs5sDkYkiE0UmikzU2zOx1k8mZOJBJopM1Nsz4TxRZAIgivOfMHgVzlNFJopMnu1z6yqfZXFVDHSEzsshkzX2iWKfKDJRZKIiMmn2/xmYHxTY6fou2yITAFE4TxSZqEaZPOrnHTKxJmqTyTzXZiOuCl7ba8WPTP4ArXcVk7RXZHkAAAAASUVORK5CYII="
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <p className="serviceHeading" >Bookbinding Service</p>
                        <br/>
                        <p className="serviceSubheading">- บริการเข้าเล่มเอกสาร</p>
                        <br/>
                        <p className="serviceParagraph">บริการเข้ารูปเล่มเอกสารสมัยใหม่และทันสมัย เพื่อให้ลูกค้าได้สัมผัสไปกับประสบการณ์ในการออกแบบรูปเล่มของตนเอง ไม่ว่าจะเป็นรูปแบบสีสันของหน้าปก ชนิดของกระดาษ หรือ การเย็บเล่มในแบบต่างๆ ทางร้านเราได้จัดเตรียมไว้ให้ท่านเรียบร้อย เราหวังเป็นอย่างยิ่งที่จะให้ลูกค้าทุกท่านของเราได้มีสิทธิในการเลือกออกแบบรูปเล่มของตนเองด้วยตนเอง และไว้วางใจให้เราได้เป็นผู้มอบบริการให้แก่ท่าน</p>
                        <br/>
                        <Link to="/bookbindinglist"><Button variant="outline-dark">Order>></Button></Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        
    )
}
export default Service;