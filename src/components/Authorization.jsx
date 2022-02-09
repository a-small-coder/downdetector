import React from 'react';
import {
    IconButton,
    useDisclosure
} from '@chakra-ui/react';
import AuthFormModal from './AuthFormModal';
// Icon from library
import {
    FiUserCheck,
    FiUserPlus,
} from 'react-icons/fi'

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
        <IconButton
                mx={1}
                icon={props.isAuth ? <FiUserCheck /> : <FiUserPlus />}
                fontSize={{base: '24px', lg: '32px'}}
                pr='4px'
                mr='2'
                bg="transparent"
                color='white'
                onClick={onOpen}
                _active={{
                    bg: 'inherit',
                }}
                _hover={{
                    bg: 'inherit',
                    transform: 'scale(1.2)'
                }}
            /> 
            {modal}

        </>
    );
}

export default Authorization;
