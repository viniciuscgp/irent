import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';

import styles from './Rodape.module.css';

const Rodape = () => (
    <Container fluid>
        <div className='d-flex justify-content-center fixed-bottom bg-dark text-white p-0' >
            <ul className={`d-flex list-unstyled align-items-center pt-2 ${styles.rodape_social}`} style={{ gap: '0.6rem' }}>
                <li className=""> iRent - Copyright 2023 - Vinicius César - </li>
                <li className="fs-5"><FaFacebook /></li>
                <li className="fs-5"><FaTwitter /></li>
                <li className="fs-5"><FaGithub /></li>
            </ul>
        </div>
    </Container >
);

export default Rodape;
