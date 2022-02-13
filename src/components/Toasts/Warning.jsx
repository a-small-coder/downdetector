import React from 'react';
import { Box, Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import {
    InfoOutlineIcon
} from '@chakra-ui/icons'

function Warning(props) {
    return (
        <Box
            w={{ base: '256px', md: '356px' }}
            minH='72px'
            color='white'
            p={3}
            bg='red.600'
            borderRadius='6px'
            borderTop='4px solid #822727'
        >
            <HStack spacing='3'>
                <Icon as={InfoOutlineIcon} w='16px' color='white' alignSelf='flex-start' />
                <VStack spacing='0' alignItems='flex-start'>
                    <Heading fontFamily='Inter;' fontSize='16px' fontWeight='bold'>
                        {props.title}
                    </Heading>
                    <Text fontSize='16px' fontFamily='Inter;'>
                        {props.text}
                    </Text>
                </VStack>
            </HStack>
        </Box>
    );
}

export default Warning;