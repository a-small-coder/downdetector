import React from 'react';
import { Button, HStack, Image, Text, useDisclosure } from '@chakra-ui/react';
import AuthFormModal from './AuthFormModal';
import singinIcon from '../img/Icons/ExitIcon.png'

function Authorization(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const modal = (
        <AuthFormModal 
            isOpen={isOpen} 
            onClose={onClose} 
        />
    )
    return (
        <HStack spacing={{ base: '1', md: '5' }} display="flex">
            <Button onClick={onOpen} variant='link'>

                {/* для экранов шире чем 992px */}
                <Text 
                    fontSize='2xl' 
                    color='white' 
                    display={{ base: "none", lg: "block" }}
                >
                    Войти/Регистрация
                </Text>

                {/* для экранов уже чем 992px */}
                <Image
                    src={singinIcon}
                    display={{ base: "block", lg: "none" }}
                    transition="color 0.2s"
                    minW='8'
                    minH='8'
                    _hover={{ color: "gray.600" }}
                />
            </Button>
            {modal}

        </HStack>
    );
}

export default Authorization;