import React from 'react';
import Propriedade from './Propriedade';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import "./ListaPropriedades.css";

const ListaPropriedades = ({ dados, onPageChange, pagina, totalPaginas }) => {

    if (!dados || !Array.isArray(dados.items)) {
        return null;
    }

    const handlePageChange = (value) => {
        onPageChange(value);
    }

    let itens = [];

    // Adicionar botão "Anterior"
    itens.push(
        <Pagination.Prev
            key="prev"
            onClick={() => handlePageChange(pagina - 1)}
            disabled={pagina === 1}
            className="page-item"
        />
    );

    // Adicionar número de páginas
    for (let number = 1; number <= totalPaginas; number++) {
        itens.push(
            <Pagination.Item
                key={number}
                active={number === pagina}
                onClick={() => handlePageChange(number)}
                className="page-item"
            >
                {number}
            </Pagination.Item>,
        );
    }

    // Adicionar botão "Próximo"
    itens.push(
        <Pagination.Next
            key="next"
            onClick={() => handlePageChange(pagina + 1)}
            disabled={pagina === totalPaginas}
            className="page-item"
        />
    );

    return (
        <Container fluid="true" style={{ paddingBottom: '100px' }}>
            <Row className="justify-content-center">
                <Col xs={12} md={8} className="text-center">
                    <Pagination className="pagination-container">{itens}</Pagination>
                </Col>
            </Row>
            <Row className="justify-content-center g-4">
                <Col xs={12} lg={12} xl={12} className="d-flex flex-wrap justify-content-center">
                    {dados.items.map((propriedade, index) => {
                        return (
                            <div className="m-2" key={index}>
                                <Propriedade {...propriedade} />
                            </div>
                        )
                    })}
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} md={8} className="text-center">
                    <Pagination className="pagination-container">{itens}</Pagination>
                </Col>
            </Row>
        </Container>
    );
}

export default ListaPropriedades;
