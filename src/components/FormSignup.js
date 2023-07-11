import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import CartaoCentralizado from './CartaoCentralizado';
import { FcAssistant } from 'react-icons/fc';
import Botao from './Botao';
import MostraMensagem from './MostraMensagem';
import { useNavigate } from 'react-router-dom';

const FormSignup = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const [showErro, setShowErro] = useState('');
    const [showSucesso, setShowSucesso] = useState('');
    const [senhaErro, setSenhaErro] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (showErro) setShowErro(true);
    }, [showErro])

    useEffect(() => {
        if (showSucesso) setShowSucesso(true);
    }, [showSucesso])

    const sendData = async () => {
        const apiUrl = `https://irent.narede.app.br/api/v1/usuarios`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    senha: senha
                })
            });

            const data = await response.json();

            console.log(data);
            if (data.status === "error") {
                setShowErro(true);
            } else if (data.status === "success") {
                setShowSucesso(true);
            }

        } catch (error) {
            console.error('Houve um erro:', error);
        } finally {
            setEmail("");
            setSenha("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (senha != confirmarSenha) {
            setSenhaErro(true);
            setSenha('');
            setConfirmarSenha('');
            return;
        }

        setSenhaErro(false);
        sendData();

        setNome('');
        setEmail('');
        setSenha('');
        setConfirmarSenha('');
    };

    const handleClose = () => {
        navigate("/login");
        setShowSucesso(false);

    }

    return (
        <div>
            <CartaoCentralizado icone={FcAssistant} titulo="Cadastro de Usuário" larguraMaxima="450px">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Seu nome"
                            value={nome}
                            required
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Seu email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="senha">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Senha"
                            value={senha}
                            required
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confirmarSenha">
                        <Form.Label>Confirmar Senha</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirmar Senha"
                            value={confirmarSenha}
                            required
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                        />
                        {senhaErro && <div className="text-danger">As senhas não conferem.</div>}
                    </Form.Group>

                    <Botao tipo="submit">Cadastrar</Botao>
                </Form>
            </CartaoCentralizado>

            <MostraMensagem
                title="Erro ao cadastrar novo usuário:"
                message="Por favor, preencha os dados corretamente!"
                timeout={10}
                show={showErro}
                mood="info"
                handleClose={() => setShowErro(false)}
            />

            <MostraMensagem
                title="Parabéns !"
                message="Obrigado por se cadastrar no iRent!"
                timeout={10}
                show={showSucesso}
                mood="sucess"
                handleClose={handleClose}
            />

        </div>

    );
};

export default FormSignup;
