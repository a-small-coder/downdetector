import { HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import singinIcon from '../img/ExitIcon.png'


function HeaderUserInfo(props) {
    debugger
    if (!props.isUserAuth) {
        return (
            <HStack spacing={{ base: '1', md: '5' }} display="flex">
                {/* для экранов шире чем 992px */}
                <Text fontSize='2xl' color='white' display={{ base: "none", lg: "block" }}>
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
            </HStack>
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