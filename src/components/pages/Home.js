import ListaPropriedades from "../ListaPropriedades";
import Pesquisa from "../Pesquisa"
import { useState, useEffect } from 'react';

function Home() {
    const [dados, setDados] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(1);

    const handlePesquisa = (novosDados, totalPaginas) => {
        setDados(novosDados);
        setTotalPaginas(totalPaginas);
    };

    const handlePageChange = (novaPagina) => {
        setPagina(novaPagina);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pagina]);


    return (
        <section>
            <Pesquisa onPesquisou={handlePesquisa} pagina={pagina} />

            <ListaPropriedades dados={dados} onPageChange={handlePageChange} pagina={pagina} totalPaginas={totalPaginas} />
        </section>
    )
}

export default Home;
