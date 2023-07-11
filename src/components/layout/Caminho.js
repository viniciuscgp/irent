import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Breadcrumb() {
    let location = useLocation();
    let pathnames = location.pathname.split("/").filter((x) => x);

    useEffect(a => {
        console.log(pathnames);
    }, [pathnames])

    return (
        <div className='bg-dark-subtle'>
            <span className='me-2 ms-2'>Você está aqui:</span>
            <a href="/">Home</a>
            {pathnames.map((value, index) => {
                let to = `/${pathnames.slice(0, index + 1).join("/")}`;

                return (
                    < span key={index} >
                        / <a href={to}>{value}</a >
                    </span>
                );
            })}
        </div >
    );
}

export default Breadcrumb;
