import { Box, Button, CircularProgress, Divider, Flex, Heading, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import {
    useLocation
} from "react-router-dom";
import { connect } from 'react-redux';
import { setCompanySubscribeStatusAC } from '../redux/companies_reducer';
import { useEffect } from 'react';
import { useState } from 'react';
import LineGraph from './LineGraph';
import SendReportAlert from './SendReportAlert';

function CompanyPage(props) {

    const [company, setCompany] = useState({})

    const subscribeHandler = () => {
        const companyCopy = {...company, isSubscribe: !company.isSubscribe}
        props.setSubscribeStatus(company.id)
        setCompany(companyCopy)
      }

    const location = useLocation();

    useEffect(() => {
        let company_link = location.pathname.slice(1)
        setCompany(getCompanyData(company_link, props.companies.companies))
    }, [location.pathname, props.companies])

    if (company == null){
        return <CircularProgress isIndeterminate color='green.300' mx='auto'/>
    }

    return (
        <VStack>
            <Flex 
                py='58px' 
                alignItems='center' 
                flexDir={{base: 'column-reverse', sm: 'row'}} 
                flexWrap={{base: 'wrap', md: 'nowrap'}} 
                justifyContent='center'
            >
                <Heading 
                    color='white' 
                    fontWeight='700' 
                    fontSize={{base: '24px', md: '36px', lg: '48px'}} 
                    textShadow='0px 4px 16px rgba(255, 255, 255, 0.25);' 
                    m={{base: '16px 0 0 0', sm: '0 12px 0 0', md: '0 20px 0 0'}}
                >
                    {company.company_name}
                </Heading>
                <Image
                    src={company.company_logo}
                    alt={company.company_name} 
                    w={{base: '48px', md: '64px'}}
                    >

                </Image>
            </Flex>

            <Flex 
                flexDir={{base: 'column', lg: 'row'}}
                w='100%'
                justifyContent='space-around'
                flexWrap='wrap'
                
            >
                <Box 
                    mb='8'
                    mx={{base: 'auto', lg: '4'}}
                    maxW='600px'
                    w='100%'
                    bg='white'
                >
                    <LineGraph data={company.dataGraphPerDay}/>
                </Box>

                <Box 
                    mb='8'
                    mx={{base: 'auto', lg: '4'}}
                    maxW='600px'
                    w='100%'
                    bg='white'
                >
                    <LineGraph data={company.dataGraphPerHour}/>
                </Box>

            </Flex>

            <Divider/>

            <Flex 
                flexDir={{base: 'column', md: 'row'}}
                my='8' 
                py={{base: '4', md: '12'}}
            >
                <SendReportAlert/>
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
                    onClick={subscribeHandler}
                >
                    {company.isSubscribe ? 'Отписаться' : 'Подписаться'}
                </Button>
            </Flex>
        </VStack>
    );
}

let mapStateToProps = (state) => {
    return {
        companies: state.companies,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setSubscribeStatus: (companyId) => {
            dispatch(setCompanySubscribeStatusAC(companyId));
        }
    }
}
const CompanyPageContainer = connect(mapStateToProps, mapDispatchToProps)(CompanyPage);

export default CompanyPageContainer;

const getCompanyData = (company_name, companies) => {
    let right_company = {}
    if (companies == null || companies.length < 1){
        return right_company
    }
    companies.forEach(company => {
        if (company.link === company_name){
            right_company = company
        }
    });
    return right_company
}
