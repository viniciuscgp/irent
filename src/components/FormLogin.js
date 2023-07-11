import { UserContext } from '../components/contexts/UserContext';

import React from 'react';
import Form from 'react-bootstrap/Form';
import CartaoCentralizado from './CartaoCentralizado'
import Botao from './Botao';
import { useState, useEffect, useContext } from 'react';
import { FcAssistant } from "react-icons/fc";
import MostraMensagem from './MostraMensagem';
import { useNavigate } from 'react-router-dom';


const FormLogin = () => {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [showErro, setShowErro] = useState(false);
  const [erroMessage, setErroMessage] = useState("Email ou senha inválidos!");
  const { setUser } = useContext(UserContext);
  const [captcha, setCaptcha] = useState('');
  const [captcha_codigo, setCaptchaCodigo] = useState(0);
  const [captcha_texto, setCaptchaTexto] = useState('');

  const navigate = useNavigate();

  let questions = [
    '8 + 3', '8 - 3', '1 + 2', '7 x 2', '4 - 1',
    '5 + 1', '8 + 9', '6 + 6', '3 - 3', '1 + 9'
  ]

  useEffect(() => {
    if (showErro) {
      setShowErro(true);
    }
  }, [showErro]);

  useEffect(() => {
    const r = Math.floor(Math.random() * 10);
    setCaptchaCodigo(r);
    setCaptchaTexto('Quanto é ' + questions[r]);
  }, [])

  const fetchData = async () => {
    const apiUrl = `https://irent.narede.app.br/api/v1/usuarios/auth`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          senha: senha,
          captcha_resposta: captcha,
          captcha_codigo: captcha_codigo
        })
      });

      const data = await response.json();

      console.log(data);
      if (data.status === "error") {
        setShowErro(true);
        setErroMessage(data.message)
        setUser(null)
      } else {
        setUser(data);
        navigate('/');
      }

    } catch (error) {
      console.error('Houve um erro:', error);
      setUser(null)
    } finally {
      setEmail("");
      setSenha("");
    }
  };

  function enviaFormulario(e) {
    e.preventDefault();
    fetchData();
  }

  return (
    <div>
      <CartaoCentralizado icone={FcAssistant} titulo="Por favor, insira suas credenciais" larguraMaxima="450px">
        <Form onSubmit={enviaFormulario}>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="seu email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="senha">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="senha"
              autoComplete='false'
              value={senha}
              required
              onChange={(e) => setSenha(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="senha">
            <Form.Label>{captcha_texto}</Form.Label>
            <Form.Control
              type="text"
              placeholder="resposta"
              autoComplete='false'
              value={captcha}
              required
              onChange={(e) => setCaptcha(e.target.value)}
            />
          </Form.Group>


          <Botao tipo="submit">
            Enviar
          </Botao>

        </Form>
      </CartaoCentralizado >

      <MostraMensagem
        title="Erro!"
        message={erroMessage}
        timeout={10}
        show={showErro}
        mood="danger"
        handleClose={() => setShowErro(false)}
      />
    </div>
  );
};

export default FormLogin;
