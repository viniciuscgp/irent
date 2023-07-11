import React, { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import CartaoCentralizado from './CartaoCentralizado';
import Botao from './Botao';
import MostraMensagem from './MostraMensagem';

import { FaEnvelope } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FcAssistant } from "react-icons/fc";

const FormContato = () => {
    const [contato, setContato] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });

    const [showModal, setShowModal] = useState(false);

    const nomeRef = useRef(null);

    useEffect(() => {
        nomeRef.current.focus();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContato((prevContato) => ({
            ...prevContato,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { nome, email, mensagem } = contato;

        const emailUrl = `mailto:${email}?subject=${encodeURIComponent('Contato do Site')}&body=${encodeURIComponent(`Nome: ${nome}\n\nMensagem: ${mensagem}`)}`;
        window.location.href = emailUrl;
        setContato({ nome: '', email: '', mensagem: '' });
        nomeRef.current.focus();
        setShowModal(true);
    };

    return (
        <div>
            <CartaoCentralizado icone={FcAssistant} titulo="Fale conosco!" larguraMaxima="500px">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formNome">
                        <Form.Label>Nome</Form.Label>
                        <div className="d-flex align-items-center">
                            <Form.Control
                                type="text"
                                placeholder="Digite seu nome"
                                name="nome"
                                value={contato.nome}
                                onChange={handleChange}
                                required
                                ref={nomeRef}
                            />
                            <FaUserAlt className="ms-2 text-primary" size={48} style={{ color: 'blue' }} />
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <div className="d-flex align-items-center">
                            <Form.Control
                                type="email"
                                placeholder="Digite seu email"
                                name="email"
                                value={contato.email}
                                onChange={handleChange}
                                required
                            />
                            <FaEnvelope className="ms-2 text-primary" size={48} style={{ color: 'blue' }} />
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formMensagem">
                        <Form.Label>Mensagem</Form.Label>
                        <div className="d-flex align-items-center">

                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Digite sua mensagem"
                                name="mensagem"
                                value={contato.mensagem}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </Form.Group>

                    <Botao tipo="submit">
                        Enviar
                    </Botao>
                </Form>
            </CartaoCentralizado>

            <MostraMensagem
                title="Obrigado!"
                message="Agradecemos o seu contato!"
                timeout={10}
                show={showModal}
                mood="info"
                handleClose={() => setShowModal(false)}
            />
        </div>
    );
};

export default FormContato;
