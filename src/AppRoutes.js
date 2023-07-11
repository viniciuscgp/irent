import { useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Contato from "./components/pages/Contato";
import CadastroImovel from "./components/pages/CadastroImovel";
import Sobre from "./components/pages/Sobre";
import Signup from "./components/pages/Signup";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={600}
            >
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/cadastroimoveis" element={<CadastroImovel />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default AppRoutes;
