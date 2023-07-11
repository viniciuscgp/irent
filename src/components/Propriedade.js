import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import MostraImagem from '../components/MostraImagem';
import Botao from './Botao';
import PropriedadeDetalhe from './PropriedadeDetalhe';
import styles from './Propriedade.module.css';
import { Modal } from 'react-bootstrap';

const Propriedade = ({ id, imagens, resumo, descricao, valor, tipo, quartos, metragem, cidade, bairro }) => {

    const imgs = imagens ? imagens.split(';') : [];

    const [modalAberto, setModalAberto] = useState(false);
    const [imagemMaior, setImagemMaior] = useState('');
    const [detalhesMostrados, setDetalhesMostrados] = useState(false);

    const abrirModal = (imagem) => {
        setModalAberto(true);
        setImagemMaior(imagem);
    };

    const fecharModal = () => {
        setModalAberto(false);
        setImagemMaior('');
    };

    const mostrarDetalhes = () => {
        setDetalhesMostrados(true);
    }

    return (
        <Card className={`${styles.card3D} h-100 bg-secondary text-white m-2`} style={{ width: '25rem' }}>

            {imgs.length > 0 ? (
                <Carousel interval={null}>
                    {imgs.map((imagem, index) => (
                        <Carousel.Item key={index} onClick={() => abrirModal(imagem)}>
                            <Card.Img variant="top" src={`https://irent.narede.app.br/api/assets/fotos/${id}/` + imagem} style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            ) : (
                <Card.Img variant="top" src={`https://irent.narede.app.br/api/assets/fotos/image_no_images.jpg`} style={{ height: '200px', objectFit: 'cover' }} />
            )}

            <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="">{resumo}</Card.Title>
                <Card.Text>{descricao.length > 100 ? descricao.slice(0, 100) + "..." : descricao}</Card.Text>

                <Row className="mt-auto">
                    <Col>
                        <p><strong>Valor:</strong> {valor}</p>
                        <p><strong>Tipo:</strong> {tipo}</p>
                        <p><strong>Quartos:</strong> {quartos}</p>
                        <p><strong>Metragem:</strong> {metragem}</p>
                    </Col>
                    <Col>
                        <p><strong>Cidade:</strong> {cidade}</p>
                        <p><strong>Bairro:</strong> {bairro}</p>
                        <Botao
                            onClick={() => mostrarDetalhes()}>
                            Saiba mais...
                        </Botao>
                    </Col>
                </Row>
            </Card.Body>

            <MostraImagem
                mostrar={modalAberto}
                fecharModal={fecharModal}
                imagem={`https://irent.narede.app.br/api/assets/fotos/${id}/` + imagemMaior}
            />

            <Modal
                show={detalhesMostrados}
                onHide={() => setDetalhesMostrados(false)}
                dialogClassName={`${styles.cardCustom}`}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Detalhes da Propriedade</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <PropriedadeDetalhe {...{ id, imagens, resumo, descricao, valor, tipo, quartos, metragem, cidade, bairro }} />
                </Modal.Body>
            </Modal>

        </Card>
    );
}

export default Propriedade;
