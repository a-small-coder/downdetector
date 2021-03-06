import { HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Authorization from './Authorization';
// Icons from library
import {
    FiUser,
} from 'react-icons/fi'


function HeaderUserInfo(props) {

    const exitHandler = () => {
        props.setIsAuth(false)
    }

    if (!props.isUserAuth) {

        return (
            <Authorization isAuth={props.isUserAuth}/>
        )
    }
    else {
        const username = props.userEmail.length > 0 ? props.userEmail.slice(0, props.userEmail.indexOf('@')) : ''
        return (
            <HStack spacing='1' display="flex">
                <Text fontSize='24px' fontWeight='500' color='white' isTruncated maxW='130px' display={{ base: "none", lg: "block" }} fontFamily="Space Grotesk">
                    {username}
                </Text>
                <Image
                as={FiUser}
                w={{ base: "8", md: '12', lg: "16" }}
                fontSize={{base: '24px', md: '32px', lg: '38px'}}
                bg="transparent"
                color='white'
                cursor='pointer'
                onClick={exitHandler}
            /> 
            </HStack>
        );
    }
    
}

export default HeaderUserInfo;