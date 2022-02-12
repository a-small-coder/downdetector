import React from 'react';
import CompanyCard from './CompanyCard';
import { chakra, Flex } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { setCompanySubscribeStatusAC } from '../redux/companies_reducer';


function CompanyCardsSection(props) {
  const cardsData = props.companies.companies

  const subscribeHandler = (id) => {
    props.setSubscribeStatus(id)
  }
  let companies = []
  if (cardsData != null && cardsData.length > 0){
    companies = cardsData.map(c => (
        <chakra.div
          key={c.id} 
          my='16px'
          mx={{base: 'auto', xl: '0'}} 
          px='10px' 
          width={{base: '100%', md: '80%', xl: '50%'}}
        >
            <CompanyCard key={'card' + c.id} data={c} changeSubscrStatus={subscribeHandler} />
        </chakra.div>
      
    ))
  }  
    return (
        <Flex justifyContent={'space-between'} flexWrap={'wrap'} mt='80px'>
              {companies}
            </Flex>
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
const CompanyCardsSectionContainer = connect(mapStateToProps, mapDispatchToProps)(CompanyCardsSection);

export default CompanyCardsSectionContainer;