import React from 'react';
import { Box, Button, chakra, Flex, Heading, HStack, Icon, Image, Link, Text, VStack } from '@chakra-ui/react';

import {
    FiStar
} from 'react-icons/fi'
import {
    FaStar
} from 'react-icons/fa'

function CompanyCard(props) {

    const data = props.data

    const subscribeOnCompany = () => {
        props.changeSubscrStatus(data.id)
    }

    return (
        <chakra.div
            flex='1 1 200px'
            maxW='800px'
            minW='200px'
            minH='200px'
            bg='#2D3748'
            borderRadius='24px'
            boxShadow='0px 20px 77px rgb(3 8 17 / 40%);'
            color='white'

            py={{ base: '12px', md: '16px', lg: '24px' }}
            px={{ base: '16px', sm: '24px', md: '32px', lg: '36px' }}
            display={'flex'}
            _hover={{
                transform: 'scale(1.05)',
            }}
        >
            <VStack p='0' spacing={{ base: 2, md: 4, xl: 6 }}>
                <HStack justifyContent={'space-between'} w='100%'>
                    <Heading
                        textAlign={'start'}
                        w='100%'
                        fontSize={{ base: '22px', md: '28px' }}
                    >
                        <Link>
                            {data.company_name}
                        </Link>
                    </Heading>
                    {!data.isSubscribe ? (
                        <Icon
                            as={FiStar}
                            h='24px'
                            w='24px'
                            color='white'
                            cursor={'pointer'}
                            _hover={{
                                color: 'yellow',
                                transform: 'scale(1.2)'
                            }}
                            onClick={subscribeOnCompany} />
                    )
                        : (
                            <Icon
                                as={FaStar}
                                h='24px'
                                w='24px'
                                color='yellow'
                                cursor={'pointer'}
                                _hover={{
                                    transform: 'scale(1.2)'
                                }}
                                onClick={subscribeOnCompany}
                            />
                        )

                    }

                </HStack>

                <Flex
                    h='100%'
                    flexDir={{ base: 'column-reverse', xl: 'row' }}
                    alignItems='center'
                    pb={{ base: '20px', md: '30px', xl: '0' }}
                >
                    <Text textAlign='justify' w={{ base: '100%', xl: '50%' }}>
                        {data.description}
                    </Text>
                    <Box
                        flex={'1 1 auto'}
                        minW='100px'
                        maxW={'300px'}
                        w={{ base: 'calc(100% - 30px)', xl: 'calc(50% - 30px)' }}
                        px='15px'
                        my='20px'
                    >
                        <Link ml={{base: '0', xl: '15px'}} maxW='150px'>
                            <Image src={data.company_logo} alt={data.company_name} />
                        </Link>
                    </Box>
                </Flex>

                <Flex
                    flexDirection={{ base: 'column', sm: 'row' }}
                    justifyContent={{ base: 'flex-start', sm: 'space-between' }}
                    alignItems='center'
                    w='100%'
                >
                    <Button
                        maxW={{ base: '100%', sm: '50%' }}
                        w='100%'
                        px='15px'
                        bg='purple.600'
                        mr={{ base: '0', sm: '25px' }}
                        flex={{ base: '1 1 40px', sm: '1 0 100px' }}
                        variant={'solid'}
                        h='10'
                        color='white'
                        fontSize={'16px'}
                        fontWeight={'600'}
                        _active={{ bg: 'purple.700' }}
                        _hover={{ bg: 'purple.700' }}
                    >
                        К организации
                    </Button>
                    <Button
                        mt={{ base: '15px', sm: '0' }}
                        w={{ base: '100%', sm: 'auto' }}
                        px='15px'
                        bg='red.600'
                        variant={'solid'}
                        h='10'
                        color='white'
                        fontSize={'16px'}
                        fontWeight={'600'}
                        _active={{ bg: 'red.700' }}
                        _hover={{ bg: 'red.700' }}
                    >
                        Репорт
                    </Button>
                </Flex>

            </VStack>
        </chakra.div>
    );
}

export default CompanyCard;