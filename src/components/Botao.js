import Button from 'react-bootstrap/Button';

function Botao({ onClick, variante = "primary", tipo = "", children }) {
    return (
        <>
            <Button className="mt-2" variant={variante} type={tipo} onClick={onClick}>
                {children}
            </Button>
        </>
    )
}

export default Botao;