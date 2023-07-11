import React from 'react';
import Card from 'react-bootstrap/Card';

const CartaoCentralizado = ({ titulo, larguraMaxima = '800px', children, icone: Icon }) => {
  return (
    <div className="ms-3 me-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ maxWidth: larguraMaxima, width: '100%' }}>
        {titulo && <Card.Header className='bg-dark text-white'>
          {Icon && <Icon className="me-2" size={32} />}
          {titulo}
        </Card.Header>}
        <Card.Body>
          {children}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CartaoCentralizado;
