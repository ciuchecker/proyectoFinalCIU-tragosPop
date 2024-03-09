import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Carrusel = () =>{
    return(

        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.ingredion.com/content/dam/ingredion/mx-images/image-desktop/AEM-Categories-Image-Alcoholic_beverages.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.ingredion.com/content/dam/ingredion/mx-images/image-desktop/AEM-Image-ERYSTA.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.ingredion.com/content/dam/ingredion/mx-images/image-desktop/AEM-Categories-Image-Beverages.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

    );
};

export default Carrusel;