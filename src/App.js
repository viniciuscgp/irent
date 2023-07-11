import Cabecalho from "./components/layout/Cabecalho";
import Rodape from "./components/layout/Rodape";
import MostrarCookie from "./components/MostraCookie";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./components/contexts/UserContext";
import './App.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <Cabecalho />
        <Rodape />
        <MostrarCookie />
        <AppRoutes />
      </Router>
    </UserProvider>
  );
}

export default App;
