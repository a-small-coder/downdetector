import { HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Authorization from './Authorization';


function HeaderUserInfo(props) {

    if (!props.isUserAuth) {

        return (
            <Authorization/>
        )
    }
    else {
        return (
            <HStack spacing={{ base: '1', md: '5' }} display="flex">
                <Text fontSize='2xl' color='white' isTruncated maxW='130px' display={{ base: "none", lg: "block" }}>
                    {props.userEmail}
                </Text>
                <Image
                    src={props.userIcon}
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