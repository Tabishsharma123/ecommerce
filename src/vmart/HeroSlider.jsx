import React from 'react'
import { Card, Carousel } from 'react-bootstrap';
import Products from './Products'
import Aboutus from '../components/About/Aboutus';
import Mailer from '../components/Mailer/Mailer';

const HeroSlider = () => {
    return (
        <>
            <div>
                <Card style={{ backgroundColor: "#bf6102" }}>
                    <Carousel>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src="../assets/img1.jpg"
                                alt="First slide"
                                height="550px"
                            />
                            <Carousel.Caption>
                                <h3>NEW SEASON ARRIVALS</h3>
                                <p>CHECK OUT ALL THE TRENDS.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src="../assets/img2.jpg"
                                alt="Second slide"
                                height="550px"
                            />
                            <Carousel.Caption>
                                <h3>NEW SEASON ARRIVALS</h3>
                                <p>CHECK OUT ALL THE TRENDS.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                        <Carousel.Item  interval={1500}>
                            <img
                                className="d-block w-100"
                                src="../assets/img3.jpg"
                                alt="Third slide"
                                height="550px"
                            />
                            <Carousel.Caption>
                                <h3>NEW SEASON ARRIVALS</h3>
                                <p>CHECK OUT ALL THE TRENDS.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Card>

                <Products />
                <hr/>
                <Aboutus />
                <hr/>
                <Mailer />
            </div>
        </>
    )
}

export default HeroSlider