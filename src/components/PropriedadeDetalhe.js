import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import MostraImagem from '../components/MostraImagem';
import styles from './PropriedadeDetalhe.module.css';

const PropriedadeDetalhe = ({ id, imagens, resumo, descricao, valor, tipo, quartos, metragem, cidade, bairro }) => {

    const imgs = imagens ? imagens.split(';') : [];

    const [modalAberto, setModalAberto] = useState(false);
    const [imagemMaior, setImagemMaior] = useState('');

    const abrirModal = (imagem) => {
        setModalAberto(true);
        setImagemMaior(imagem);
    };

    const fecharModal = () => {
        setModalAberto(false);
        setImagemMaior('');
    };

    return (
        <Card className={`${styles.card3D} ${styles.cardCustom} h-100 bg-secondary text-white m-2`}>

            {imgs.length > 0 ? (
                <Carousel interval={null}>
                    {imgs.map((imagem, index) => (
                        <Carousel.Item key={index} onClick={() => abrirModal(imagem)}>
                            <Card.Img variant="top" src={`https://irent.narede.app.br/api/assets/fotos/${id}/` + imagem} style={{ height: '400px', objectFit: 'cover', cursor: 'pointer' }} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            ) : (
                <Card.Img variant="top" src={`https://irent.narede.app.br/api/assets/fotos/image_no_images.jpg`} style={{ height: '200px', objectFit: 'cover' }} />
            )}

            <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="">{resumo}</Card.Title>
                <Card.Text>{descricao}</Card.Text>

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
                    </Col>
                </Row>
            </Card.Body>

            <MostraImagem
                mostrar={modalAberto}
                fecharModal={fecharModal}
                imagem={`https://irent.narede.app.br/api/assets/fotos/${id}/` + imagemMaior}
            />

        </Card>
    );
}

export default PropriedadeDetalhe;
