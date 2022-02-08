import { HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Authorization from './Authorization';
// Icons from library
import {
    FiUser,
} from 'react-icons/fi'


function HeaderUserInfo(props) {

    if (!props.isUserAuth) {

        return (
            <Authorization isAuth={props.isUserAuth}/>
        )
    }
    else {
        return (
            <HStack spacing={{ base: '1', md: '5' }} display="flex">
                <Text fontSize='2xl' color='white' isTruncated maxW='130px' display={{ base: "none", lg: "block" }}>
                    {props.userEmail}
                </Text>
                <Image
                    src={FiUser}
                    display="block"
                    transition="color 0.2s"
                    minW={{ base: "8", lg: "12" }}
                    minH={{ base: "8", lg: "12" }}
                    _hover={{ color: "gray.600" }}
                />
            </HStack>
        );
    }
    
}

export default HeaderUserInfo;