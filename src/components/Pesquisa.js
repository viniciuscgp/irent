import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { Form, Col, Row, Container } from 'react-bootstrap';
import Botao from './Botao'

const Pesquisa = (props) => {
    const { onPesquisou, pagina } = props;
    const [descricao, setDescricao] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [quartos, setQuartos] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);

        const queryParams = new URLSearchParams();
        queryParams.append('pagina', pagina);

        if (descricao) queryParams.append('descricao', descricao);
        if (cidade) queryParams.append('cidade', cidade);
        if (bairro) queryParams.append('bairro', bairro);
        if (quartos) queryParams.append('quartos', quartos);

        const apiUrl = `https://irent.narede.app.br/api/v1/imoveis?${queryParams.toString()}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const novosDados = data;
                const totalPages = Math.ceil(data.total / data.pageSize);
                onPesquisou(novosDados, totalPages);
            })
            .catch(error => {
                console.error('Houve um erro:', error);
            }).finally(() => {
                setLoading(false);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, [pagina]);

    return (
        <div className="bg-body-secondary p-3">
            <Form onSubmit={handleSubmit}>
                <Container>
                    <h4>Localize um excelente imóvel aqui!</h4>
                    <Row className="align-items-end">
                        <Col xs={6} sm={6} md={3}>
                            <Form.Group controlId="descricao">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Pesquise por algo na descrição"
                                    value={descricao}
                                    onChange={(event) => setDescricao(event.target.value)}
                                />
                            </Form.Group>
                        </Col>

                        <Col xs={6} sm={6} md={2}>
                            <Form.Group controlId="cidade">
                                <Form.Label>Cidade</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Qual cidade ?"
                                    value={cidade}
                                    onChange={(event) => setCidade(event.target.value)}
                                />
                            </Form.Group>
                        </Col>

                        <Col xs={6} sm={6} md={2}>
                            <Form.Group controlId="bairro">
                                <Form.Label>Bairro</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Qual bairro ?"
                                    value={bairro}
                                    onChange={(event) => setBairro(event.target.value)}
                                />
                            </Form.Group>
                        </Col>

                        <Col xs={6} sm={3} md={2}>
                            <Form.Group controlId="quartos">
                                <Form.Label>Quartos</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="No minimo quantos quartos ?"
                                    value={quartos}
                                    onChange={(event) => setQuartos(event.target.value)}
                                />
                            </Form.Group>
                        </Col>

                        <Col xs={6} sm={6} md={2}>
                            <Botao variant="primary" type="submit" disabled={loading}>
                                {loading ? <Spinner animation="border" size="sm" /> : 'Pesquisar'}
                            </Botao>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>
    );
};

export default Pesquisa;
