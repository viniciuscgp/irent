import React, { useState, useContext } from 'react';
import { Navbar, Nav, Container, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { FcOk } from "react-icons/fc"

import styles from './Navegacao.module.css';

function Navegacao() {
  const { user, logout } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" expanded={isOpen}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" exact>irent</Navbar.Brand>
        {
          user ?
            (<>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FcOk className="me-2" size={24} />
                <Navbar.Text className="me-3">
                  Olá, {user.nome}!
                </Navbar.Text>
              </div>            </>
            ) :
            (
              <Navbar.Text className="me-3"></Navbar.Text>
            )
        }
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle} />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/home"
              exact
              onClick={closeMenu}
              className={({ isActive, isPending }) =>
                `nav-link ${isPending ? styles.pending : isActive ? styles.active : ""}`}
            >
              Home
            </NavLink>
          </Nav>

          <Nav>
            <NavLink
              to="/signup"
              exact
              onClick={closeMenu}
              className={({ isActive, isPending }) =>
                `nav-link ${isPending ? styles.pending : isActive ? styles.active : ""}`}
            >
              Cadastre-se!
            </NavLink>

            <NavLink
              to="/login"
              exact
              onClick={user ? logout : closeMenu}
              className={({ isActive, isPending }) =>
                `nav-link ${isPending ? styles.pending : isActive ? styles.active : ""}`}
            >        {
                user ?
                  (<>
                    <div>Sair</div>
                  </>
                  ) :
                  (
                    <div>Entrar</div>
                  )
              }
            </NavLink>

            <NavLink
              to="/contato"
              exact
              onClick={closeMenu}
              className={({ isActive, isPending }) =>
                `nav-link ${isPending ? styles.pending : isActive ? styles.active : ""}`}
            >
              Contato
            </NavLink>

            <NavLink
              to="/sobre"
              exact
              onClick={closeMenu}
              className={({ isActive, isPending }) =>
                `nav-link ${isPending ? styles.pending : isActive ? styles.active : ""}`}
            >
              Sobre
            </NavLink>

          </Nav>

        </Navbar.Collapse>


      </Container >
    </Navbar >
  );
}

export default Navegacao;
