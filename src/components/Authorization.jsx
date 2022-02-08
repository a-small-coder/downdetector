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
        {props.isAuth ? 
            (<IconButton
                mx={1}
                icon={<FiUserCheck />}
                fontSize={{base: '24px', lg: '32px'}}
                pr='4px'
                bg="transparent"
                color='white'
                onClick={onOpen}
                _active={{
                    bg: 'inherit',
                }}
                _hover={{
                    bg: 'inherit',
                    border: '2px solid white'
                }}
            /> )
            :
            (<IconButton
                mx={1}
                fontSize={{base: '24px', lg: '32px'}}
                pr='4px'
                icon={<FiUserPlus />}
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
            />)
        }
            {modal}

        </>
    );
}

export default Authorization;
