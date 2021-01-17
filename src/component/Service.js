import React from "react";
import Carousel from 'react-bootstrap/Carousel'


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
                        className="w-20 h-100"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAABlBMVEVhYWFgYGAhn2p0AAACsUlEQVR4nO3d0W6jMBCFYfz+L10pqAT7TPAAgw3m/7TbCzS1xwdjpWm0O00AAOB+0lrvZm6CTABE4TxRZAIAAAA8TqrKC81va9rP5chEkYma5r/T/CUtIa2uLd3O15bWvyWBkfyPnH7Plje5inJKZV1RomszS0KXE+//zlVLzlV4Sm6jnok7tZOD3AeZAAdxxgIA8Hq8yAUQhfNEkQls+c5Ihq7tdUEmikwUmQDAdThIFZnAg32iyAQYX/05d5wEgx0WZAIgSuB5EtwZgBoePcGrG0UmikwUmSgyUWSiumRi/ca6MUd7rdLIJu3J0V6rNLJJe9rub/kCfBzdSt5BIjf1qQr/IK/LxDENmegg78kkdMH4sGIzb0jzzroxF0wmZFIgE0UmikwUmajXLdhhdyblC8ITzBY2SuoVZsnulforyeTNdmeSVn+WK9a1NBXv4ZUl30nTqky+Lb9cDlV+mzYpl+tL3J1JHLMFq6RewbMDAACGxusTRSaKTFSfTPb/bBTN0V2rMLJJe3K01yqNbNKeHP01CiObs6uildusxxwxu2hOaq5mY8Fb08AQklDA/rBvuHXRnDS/tlHhGOSBz475gaN6Jv63LAGXkG1z7nHZeAjcT0a9wv+rspMpnBxlLGSiyESRiSITRSbqdZHs3gQbpfWxnrHlIrskkyNjDZpJ+q1ecfc0ZmSi2mZyyRIu4nhrv1UrrZy7Wf4nwyt4eYeQSbRhFhJozEx4dqIVmQQMeH6Ia41y5wINs5sDkYkiE0UmikzU2zOx1k8mZOJBJopM1Nsz4TxRZAIgivOfMHgVzlNFJopMnu1z6yqfZXFVDHSEzsshkzX2iWKfKDJRZKIiMmn2/xmYHxTY6fou2yITAFE4TxSZqEaZPOrnHTKxJmqTyTzXZiOuCl7ba8WPTP4ArXcVk7RXZHkAAAAASUVORK5CYII="
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                    <img
                        className="w-20 h-100"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAABlBMVEVhYWFgYGAhn2p0AAACsUlEQVR4nO3d0W6jMBCFYfz+L10pqAT7TPAAgw3m/7TbCzS1xwdjpWm0O00AAOB+0lrvZm6CTABE4TxRZAIAAAA8TqrKC81va9rP5chEkYma5r/T/CUtIa2uLd3O15bWvyWBkfyPnH7Plje5inJKZV1RomszS0KXE+//zlVLzlV4Sm6jnok7tZOD3AeZAAdxxgIA8Hq8yAUQhfNEkQls+c5Ihq7tdUEmikwUmQDAdThIFZnAg32iyAQYX/05d5wEgx0WZAIgSuB5EtwZgBoePcGrG0UmikwUmSgyUWSiumRi/ca6MUd7rdLIJu3J0V6rNLJJe9rub/kCfBzdSt5BIjf1qQr/IK/LxDENmegg78kkdMH4sGIzb0jzzroxF0wmZFIgE0UmikwUmajXLdhhdyblC8ITzBY2SuoVZsnulforyeTNdmeSVn+WK9a1NBXv4ZUl30nTqky+Lb9cDlV+mzYpl+tL3J1JHLMFq6RewbMDAACGxusTRSaKTFSfTPb/bBTN0V2rMLJJe3K01yqNbNKeHP01CiObs6uildusxxwxu2hOaq5mY8Fb08AQklDA/rBvuHXRnDS/tlHhGOSBz475gaN6Jv63LAGXkG1z7nHZeAjcT0a9wv+rspMpnBxlLGSiyESRiSITRSbqdZHs3gQbpfWxnrHlIrskkyNjDZpJ+q1ecfc0ZmSi2mZyyRIu4nhrv1UrrZy7Wf4nwyt4eYeQSbRhFhJozEx4dqIVmQQMeH6Ia41y5wINs5sDkYkiE0UmikzU2zOx1k8mZOJBJopM1Nsz4TxRZAIgivOfMHgVzlNFJopMnu1z6yqfZXFVDHSEzsshkzX2iWKfKDJRZKIiMmn2/xmYHxTY6fou2yITAFE4TxSZqEaZPOrnHTKxJmqTyTzXZiOuCl7ba8WPTP4ArXcVk7RXZHkAAAAASUVORK5CYII="
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        
    )
}
export default Service;