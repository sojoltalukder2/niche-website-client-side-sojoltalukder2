import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import img1 from '../../images/gk20-ghost.png';
import img2 from '../../images/gk20-hotkey-v1.png';
import img3 from '../../images/gk20-water-keyboard.png';

const Banner = () => {
    return (
        <Carousel className="bg-dark" style={{ height: "94vh" }}>
            <Carousel.Item>
                <Container>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="First slide"
                        style={{ height: "90vh", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                        <h3 className="fw-bold">HOTKEYS FOR RAPID CONTROL</h3>
                        <p>Take control of your GK20 with hotkeys, easily enable access to adjust backlight brightness, media and volume controls without installing software.</p>
                    </Carousel.Caption>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="First slide"
                        style={{ height: "90vh", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                        <h3 className="fw-bold">WATER REPELLENT</h3>
                        <p>The water repellent keyboard design makes GK20 more durable and easy to clean.</p>
                    </Carousel.Caption>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        style={{ height: "90vh", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                        <h3 className="fw-bold">ANTI-GHOSTING</h3>
                        <p>Enjoy 12-key anti-ghosting (QWERASDFZXCV) on GK20 keyboard for absolute control in games.</p>
                    </Carousel.Caption>
                </Container>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;