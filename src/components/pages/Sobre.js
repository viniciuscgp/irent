import CartaoCentralizado from "../CartaoCentralizado";
import { FcAbout } from "react-icons/fc";
import Botao from "../Botao"
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Sobre() {

    let navigate = useNavigate();

    function handleClick() {
        navigate("/home");
    }
    return (
        <div>
            <CartaoCentralizado titulo={"Sobre o APP"} icone={FcAbout}>
                <p>O iRent é um projeto desenvolvido como parte do meu curso de pós-graduação em <strong>[FullStack]</strong> na <strong>PUC-Rio</strong>. A plataforma foi concebida com o objetivo de simplificar e tornar mais eficiente o processo de locação de imóveis.</p>

                <p>A ideia surgiu da observação de que, tanto para proprietários quanto para inquilinos, a jornada de locação de um imóvel pode ser repleta de incertezas e desafios. Com o iRent, busco oferecer uma solução que conecta proprietários e inquilinos em um ambiente amigável e intuitivo.</p>

                <p>Este é apenas um MVP com muitas e muitas coisas pra melhorar.</p>
                <Botao onClick={handleClick}>
                    OK
                </Botao>
            </CartaoCentralizado>
        </div>
    )
}

export default Sobre;