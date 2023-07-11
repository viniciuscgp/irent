import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const MostraImagem = ({ mostrar, fecharModal, imagem }) => {
    return (
        <Modal show={mostrar} onHide={fecharModal} size="xl">
            <Modal.Body>
                <img src={imagem} alt="Imagem Maior" style={{ width: '100%', cursor: 'pointer' }} onClick={fecharModal} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={fecharModal}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MostraImagem;
