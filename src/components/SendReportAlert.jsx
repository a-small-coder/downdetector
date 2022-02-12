import React from 'react';
import { Box, Button, Heading, HStack, Icon, Text, useToast, VStack } from '@chakra-ui/react'
import {
    CheckCircleIcon
} from '@chakra-ui/icons'

function SendReportAlert(props) {
    const toast = useToast({
        variant: 'top-accent',
        position: 'top',
        isClosable: true,
    })

    return (
        <Button
            variant={'solid'}
            h='12'
            maxW='264px'
            w='100%'
            px='55px'
            mr={{ base: '0', md: '16px' }}
            mb={{ base: '4', md: '0' }}
            bg='gray.700'
            color='white'
            fontSize={'18px'}
            fontWeight={'600'}
            _active={{ bg: 'gray.800' }}
            _hover={{ bg: 'gray.800' }}
            onClick={() =>
                toast({
                    render: () => (
                        <Box 
                            w={{base: '256px', md:'356px'}}
                            h='72px' 
                            color='white' 
                            p={3} 
                            bg='gray.500'
                            borderRadius='6px'
                            borderTop='4px solid #6B46C1'
                        >
                          <HStack spacing='3'>
                              <Icon as={CheckCircleIcon} w='16px' color='purple.600' alignSelf='flex-start'/>
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
                      ),
                })
            }
        >
            Отправить отчет
        </Button>
    )
}

export default SendReportAlert;