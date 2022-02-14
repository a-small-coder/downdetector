import React from 'react';
import { Box, chakra, Flex, Heading, HStack, Icon, Image, } from '@chakra-ui/react';
import {
    Link
} from "react-router-dom";
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
            minH='150px'
            bg='#2D3748'
            borderRadius='24px'
            boxShadow='0px 20px 77px rgb(3 8 17 / 40%);'
            color='white'
            p={{ base: '16px', sm: '24px', md: '32px' }}
            display={'flex'}
        >
            <HStack justifyContent={'space-between'} alignItems='flex-start' w='100%'>
                <Box>
                    <chakra.div
                        borderRadius='50%'
                        w='19px'
                        h='19px'
                        backgroundColor={data.status === 'online' ? 'green.300' : 'red.500'}
                        boxShadow={data.status === 'online' ? '0px 4px 16px rgba(104, 211, 145, 0.25);' : "0px 4px 16px rgba(229, 62, 62, 0.25);"}
                    />
                </Box>

                <Box alignSelf='center'>
                    <Link to={data.link} >
                        <Flex flexDirection={{base: 'column-reverse', sm: 'row'}} alignItems='center' mt={{base:'8', sm:'0'}}>
                            <Heading
                                fontWeight='bold'
                                textAlign='center'
                                w='100%'
                                fontSize={{ base: '22px', sm: '28px', md: '32px', lg: '36px' }}
                                mr={{base:'0', sm:'8px', md:'16px'}}
                                mt={{base:'16px', sm:'0'}}
                            >
                                {data.company_name}
                            </Heading>
                            <Image src={data.company_logo} alt={data.company_name} maxH={{base: '48px', lg: '64px'}} minW={{base: '64px', lg: '96px'}}/>
                        </Flex>
                    </Link>
                </Box>
                    <Icon
                        as={!data.isSubscribe ? FiStar : FaStar}
                        h='24px'
                        w='24px'
                        color={!data.isSubscribe ? 'white' : 'yellow.200'}
                        cursor={'pointer'}
                        _hover={!data.isSubscribe ?
                            {
                                color: 'yellow',
                                transform: 'scale(1.2)'
                            }
                            :
                            {
                                transform: 'scale(1.2)'
                            }}
                        onClick={subscribeOnCompany} />
            </HStack>
        </chakra.div>
    );
}

export default CompanyCard;