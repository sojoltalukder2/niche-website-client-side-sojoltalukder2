import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Footer from '../../Components/Footer';
import Navigation from '../../Components/Navigation';
import Keyboard from './Keyboard';

const Keyboards = () => {
    const [keyboards, setKeyboards] = useState([]);

    useEffect(() => {
        fetch('https://glacial-dawn-59195.herokuapp.com/keyboards')
            .then(res => res.json())
            .then(data => setKeyboards(data))
    }, [])
    return (
        <div>
            <Navigation />

            <Container className="mt-5">
                <h3 className="fw-bold">All Keyboards</h3>
                {
                    (keyboards.length === 0) && <Spinner className="mt-5" animation="grow" />
                }
                <Row className="row mt-4 g-4">
                    {
                        keyboards.map(keyboard => <Keyboard key={keyboard._id} details={keyboard}></Keyboard>)
                    }
                </Row>
            </Container>
            <Footer />
        </div >
    );
};

export default Keyboards;