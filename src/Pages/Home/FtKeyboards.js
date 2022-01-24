import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import FtKeyboard from './FtKeyboard';

const FtKeyboards = () => {
    const [ftKeyboards, setFtKeyboards] = useState([]);

    useEffect(() => {
        fetch('https://glacial-dawn-59195.herokuapp.com/keyboards')
            .then(res => res.json())
            .then(data => setFtKeyboards(data))
    }, [])

    return (
        <Container className="mt-5 pt-5">
            <h3 className="fw-bold text-center">Featured Keyboards</h3>
            <hr className="w-25 mx-auto" />
            <Row className="row mt-2 g-3">
                {
                    ftKeyboards.slice(0, 6).map(keyboard => <FtKeyboard key={keyboard._id} details={keyboard}></FtKeyboard>)
                }
            </Row>
        </Container>
    );
};

export default FtKeyboards;