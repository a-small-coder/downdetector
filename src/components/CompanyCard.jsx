import React from 'react';
import { Box, Button, chakra, Heading, HStack, Icon, Image, Link, Text, VStack } from '@chakra-ui/react';

import {
    FiStar
} from 'react-icons/fi'
import {
    FaStar
} from 'react-icons/fa'

function CompanyCard(props) {

    const data = props.data

    const subscribeOnCompany = () => {
        props.changeSubscrStatus(!data.isSubscribe)
    }

    return (
        <chakra.div
            flex='1 1 50%'
            maxW='50%'
            minH='300px'
            bg='#2D3748'
            borderRadius='24px'
            boxShadow='0px 20px 77px rgb(3 8 17 / 40%);'
            color='white'
            py='15px'
            px='35px'
            display={'flex'}
            mx='auto'
            my='30px'
            _hover={{
                transform: 'scale(1.05)',
            }}
        >
            <VStack p='0'>
                <HStack justifyContent={'space-between'} w='100%'>
                    <Heading
                        textAlign={'start'}
                        w='100%'
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

                <HStack h='100%'>
                    <Text textAlign='justify' w='50%'>
                        {data.description}
                    </Text>
                    <Box
                        flex={'1 1 auto'}
                        minW='100px'
                        w='calc(50% - 30px)'
                        px='15px'
                    >
                        <Link>
                            <Image src={data.company_logo} alt={data.company_name} />
                        </Link>
                    </Box>
                </HStack>

                <HStack
                    justifyContent={'space-between'}
                    w='100%'
                >
                    <Button
                        maxW='50%'
                        px='15px'
                        bg='purple.600'
                        mr='25px'
                        flex='1 0 100px'
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
                </HStack>

            </VStack>
        </chakra.div>
    );
}

export default CompanyCard;