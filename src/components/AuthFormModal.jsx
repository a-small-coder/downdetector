import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay} from '@chakra-ui/react';
import React from 'react';
import LoginForm from './LoginForm';

function AuthFormModal(props) {
    const isOpen = props.isOpen
    const onClose = props.onClose

    
    return (
      <>  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Войти в аккаунт</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                {props.isLoginForm ? (
                    <LoginForm />
                ) : (
                    <></>
                )}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Войти
              </Button>
              <Button onClick={onClose}>Зарегистрироваться</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default AuthFormModal;