import React, { useState, useEffect } from 'react';
import { FaSmile, FaSadTear } from 'react-icons/fa';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function CookieNotice() {
   const [show, setShow] = useState(true);

   useEffect(() => {
      const cookieConsent = localStorage.getItem('concordoComCookie');
      if (cookieConsent === 'true') {
         setShow(false);
      }
   }, []);

   const clicouConcordar = () => {
      setShow(false);
      localStorage.setItem('concordoComCookie', 'true');
   };

   const clicouDiscordar = () => {
      setShow(false);
      window.location.replace("https://www.google.com");
   };

   if (!show) {
      return null;
   }

   return (
      <>
         <Alert show={show} variant="warning">
            <Alert.Heading>ATENÇÃO:</Alert.Heading>
            <p>
               Este site utiliza cookies. Ao continuar navegando, você concorda com o uso de cookies.
            </p>
            <hr />
            <div className="d-flex justify-content-end">
               <Button className="fs-6 fw-bold mx-3" onClick={clicouConcordar} variant="success">
                  <FaSmile className="fs-4 fw-bold mx-2" />
                  EU CONCORDO
               </Button>
               <Button className="fs-6 fw-bold mx-3" onClick={clicouDiscordar} variant="primary">
                  <FaSadTear className="fs-4 fw-bold mx-2" />
                  NÃO CONCORDO
               </Button>
            </div>
         </Alert>
      </>
   );
};

export default CookieNotice;
