import { Modal,ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function AuthFormModal(props) {
    const [isLoginForm, setIsLoginForm] = useState(true)
    const changeFormHandler = () =>{
        setIsLoginForm(!isLoginForm)
    }
    const isOpen = props.isOpen
    const onClose = props.onClose

    const formSubbmit = (formData) => {
        console.log('login form is subbmiting...')
    }

    return (
        <>
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{isLoginForm? "Войти в аккаунт" : "Создать аккаунт"}</ModalHeader>
                    <ModalCloseButton />
                        {isLoginForm ? (
                            <LoginForm formSubbmit={formSubbmit} changeForm={changeFormHandler}/>
                        ) : (
                            <RegisterForm changeForm={changeFormHandler}/>
                        )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default AuthFormModal;

