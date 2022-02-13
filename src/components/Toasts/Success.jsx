import React from 'react';
import { Box, Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import {
    CheckCircleIcon
} from '@chakra-ui/icons'

function Success(props) {
    return (
        <Box
            w={{ base: '256px', md: '356px' }}
            h='72px'
            color='purple.600'
            p={3}
            bg='white'
            borderRadius='6px'
            borderTop='4px solid #6B46C1'
        >
            <HStack spacing='3'>
                <Icon as={CheckCircleIcon} w='16px' color='purple.600' alignSelf='flex-start' />
                <VStack spacing='0' alignItems='flex-start'>
                    <Heading fontFamily='Inter;' fontSize='16px' fontWeight='bold'>
                        Репорт отправлен.
                    </Heading>
                    <Text fontSize='16px'>
                        Спасибо большое!
                    </Text>
                </VStack>
            </HStack>
        </Box>
    );
}

export default Success;