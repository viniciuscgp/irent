import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { IoIosSend, IoIosRefresh } from "react-icons/io";
import CartaoCentralizado from './CartaoCentralizado';

const CadastroImovel = () => {
    const [imovel, setImovel] = useState({
        resumo: '',
        descricao: '',
        tipo: '',
        quartos: '',
        metragem: '',
        cidade: '',
        bairro: '',
        valor: '',
        imagens: ''
    });

    const handleChange = event => {
        if (event.target.name === "imagens") {
            setImovel({ ...imovel, [event.target.name]: Array.from(event.target.files) });
        } else {
            setImovel({ ...imovel, [event.target.name]: event.target.value });
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        setImovel({
            resumo: '',
            descricao: '',
            tipo: '',
            quartos: '',
            metragem: '',
            cidade: '',
            bairro: '',
            valor: '',
            imagens: ''
        });
    };

    return (
        <CartaoCentralizado titulo="Cadastre seu Imovel !">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col sm={12} md={6}>
                        <Form.Group controlId="formResumo">
                            <Form.Label>Resumo</Form.Label>
                            <Form.Control type="text" placeholder="Insira o resumo do imóvel" name="resumo" value={imovel.resumo} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formTipo">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Select name="tipo" value={imovel.tipo} onChange={handleChange}>
                                <option value="">Selecione o tipo do imóvel</option>
                                <option value="CASA">Casa</option>
                                <option value="APARTAMENTO">Apartamento</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="formMetragem">
                            <Form.Label>Metragem</Form.Label>
                            <Form.Control type="text" placeholder="Insira a metragem do imóvel" name="metragem" value={imovel.metragem} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBairro">
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control type="text" placeholder="Insira o bairro do imóvel" name="bairro" value={imovel.bairro} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formValor">
                            <Form.Label>Valor</Form.Label>
                            <Form.Control type="number" step="0.01" placeholder="Insira o valor do imóvel" name="valor" value={imovel.valor} onChange={handleChange} />
                        </Form.Group>
                    </Col>

                    <Col sm={12} md={6}>
                        <Form.Group controlId="formDescricao">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Insira a descrição do imóvel" name="descricao" value={imovel.descricao} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formQuartos">
                            <Form.Label>Quartos</Form.Label>
                            <Form.Control type="number" placeholder="Insira o número de quartos" name="quartos" value={imovel.quartos} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formCidade">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control type="text" placeholder="Insira a cidade do imóvel" name="cidade" value={imovel.cidade} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formImagens">
                            <Form.Label>Imagens</Form.Label>
                            <Form.Control type="file" multiple={true} name="imagens" onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Por favor, selecione as imagens do imóvel. Você pode selecionar várias imagens.
                            </Form.Text>
                        </Form.Group>

                    </Col>
                </Row>

                <Button className="me-3" variant="primary" type="submit">
                    <IoIosSend /> Cadastrar
                </Button>

                <Button variant="secondary" type="reset" onClick={() => setImovel({
                    resumo: '',
                    descricao: '',
                    tipo: '',
                    quartos: '',
                    metragem: '',
                    cidade: '',
                    bairro: '',
                    valor: '',
                    imagens: ''
                })}>
                    <IoIosRefresh /> Resetar
                </Button>
            </Form>
        </CartaoCentralizado>
    );
}

export default CadastroImovel;
