import React from 'react';
import {
    Link,
    IconButton,
    useDisclosure
} from '@chakra-ui/react';
import AuthFormModal from './AuthFormModal';
// Icon from library
import { RiUserAddFill } from 'react-icons/ri'

function Authorization(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const modal = (
        <AuthFormModal
            isOpen={isOpen}
            onClose={onClose}
        />
    )
    return (
        <>
            <Link
                fontSize='2xl'
                color='white's
                onClick={onOpen}
                display={{ base: "none", lg: "inherit" }}
            >
                Войти/Регистрация
            </Link>
            <IconButton
                mx={1}
                icon={<RiUserAddFill />}
                bg="transparent"
                display={{ base: "inherit", lg: "none" }}
            />
            {modal}
        </>
    );
}

export default Authorization;