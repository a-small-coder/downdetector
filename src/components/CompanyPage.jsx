import { Box, Button, Divider, Flex, Heading, HStack, Image, VStack } from '@chakra-ui/react';
import { connect } from 'formik';
import React from 'react';
import tinkoffLogo from '../assets/тинькофф.svg';
import { setCompanySubscribeStatusAC } from '../redux/companies_reducer';

function CompanyPage(props) {

    const data = {
        id: 2,
        company_name: 'Тинькофф',
        company_logo: tinkoffLogo,
        description: 'Тинькофф — онлайн-экосистема, основанная на финансовых и лайфстайл-услугах. Клиентами Тинькофф стали 19 млн человек по всей России.Тинькофф — третий крупнейший банк страны по количеству активных клиентов.',
        status: 'online',
        isSubscribe: false,
        link: 'tinkoff'
    }

    return (
        <VStack>
            <HStack py='58px' alignItems='center' flexWrap={{base: 'wrap', md: 'nowrap'}} justifyContent='center'>
                <Heading color='white' fontWeight='700' fontSize='48px' textShadow='0px 4px 16px rgba(255, 255, 255, 0.25);'>
                    {data.company_name}
                </Heading>
                <Image
                    src={data.company_logo}
                    alt={data.company_name} 
                    w='124px'
                    h='124px'
                    >

                </Image>
            </HStack>

            <Flex 
                flexDir={{base: 'column', lg: 'row'}}
                w='100%'
                justifyContent='space-around'
                
            >
                <Box 
                    mb='8'
                    mx={{base: 'auto', lg: '4'}}
                    h='250px'
                    maxW='450px'
                    w='100%'
                    bg='gray.500'
                >

                </Box>

                <Box 
                    mb='8'
                    mx={{base: 'auto', lg: '4'}}
                    h='250px'
                    maxW='450px'
                    w='100%'
                    bg='gray.500'
                >

                </Box>

            </Flex>
            <Divider/>
            <Flex 
                flexDir={{base: 'column', md: 'row'}}
                my='8' 
                py={{base: '4', md: '12'}}
            >
                <Button
                     variant={'solid'} 
                     h='12' 
                     maxW='264px'
                     w='100%'
                     px='55px'
                     mr={{base: '0', md: '16px'}}
                     mb={{base: '4', md: '0'}}
                     bg='gray.700' 
                     color='white' 
                     fontSize={'18px'} 
                     fontWeight={'600'} 
                     _active={{bg: 'gray.800'}} 
                     _hover={{bg: 'gray.800'}}
                >
                    Отправить отчет
                </Button>
                <Button
                    variant={'solid'} 
                    h='12' 
                    maxW='264px'
                    w='100%'
                    px='55px'
                    bg='gray.700' 
                    color='white' 
                    fontSize={'18px'} 
                    fontWeight={'600'} 
                    _active={{bg: 'gray.800'}} 
                    _hover={{bg: 'gray.800'}}
                >
                    Подписаться
                </Button>
            </Flex>
        </VStack>
    );
}

let mapStateToProps = (state) => {
    return {
        companies: state.companies
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setSubscribeStatus: (companyId) => {
            dispatch(setCompanySubscribeStatusAC(companyId));
        },
    }
}
const CompanyPageContainer = connect(mapStateToProps, mapDispatchToProps)(CompanyPage);

export default CompanyPageContainer;