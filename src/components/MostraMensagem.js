import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FcInfo, FcHighPriority, FcApproval } from 'react-icons/fc';
import { Badge } from 'react-bootstrap';

const MostraMensagem = ({ title, message, timeout, show, handleClose, mood }) => {
    const [countdown, setCountdown] = useState(-1);

    let Icon = null;

    const moods = {
        sucess: {
            variant: "bg-success",
            icon: FcApproval
        },
        info: {
            variant: "bg-info",
            icon: FcInfo
        },
        danger: {
            variant: "bg-danger",
            icon: FcHighPriority
        }
    };

    Icon = moods[mood].icon;


    useEffect(() => {
        let interval = null;

        if (countdown > 0) {
            interval = setInterval(() => {
                setCountdown(countdown => countdown - 1);
            }, 1000);
        } else if (countdown === 0) {
            handleClose();
        }

        return () => clearInterval(interval);
    }, [countdown, handleClose]);

    useEffect(() => {
        if (show) {
            setCountdown(timeout);
        }
    }, [timeout, show]);

    return (
        <Modal show={show} onHide={handleClose} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Modal.Header closeButton className={moods[mood].variant}>
                <Modal.Title>
                    {Icon && <Icon size={48} />} {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {message}
            </Modal.Body>
            <Modal.Footer>
                <Badge className='p-2' pill variant="primary" style={{ display: 'flex flex-column' }}>
                    {String(countdown).padStart(2, '0')}
                </Badge>
                <Button variant="secondary" onClick={handleClose} >
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal >
    );
};

MostraMensagem.defaultProps = {
    title: 'Aviso',
    message: 'Pressione OK',
    timeout: 5000,
    mood: 'bg-danger'
};

export default MostraMensagem;
