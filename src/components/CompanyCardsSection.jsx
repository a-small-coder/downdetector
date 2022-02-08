import React, { useState } from 'react';

import sberLogo from '../assets/noviy-logotip-sberbank.svg';
import tinkoffLogo from '../assets/tinkoff-logo.png';
import alfabankLogo from '../assets/Alfa-Bank.png';
import rhbLogo from '../assets/rosselhos-logo.png'
import CompanyCard from './CompanyCard';
import { chakra, Flex } from '@chakra-ui/react';


function CompanyCardsSection(props) {
    const [isSubscribe1, subscribeHandler1] = useState(false)
    const [isSubscribe2, subscribeHandler2] = useState(false)
    const [isSubscribe3, subscribeHandler3] = useState(false)
    const [isSubscribe4, subscribeHandler4] = useState(false)
    const [isSubscribe5, subscribeHandler5] = useState(false)
    const [isSubscribe6, subscribeHandler6] = useState(false)
    const [isSubscribe7, subscribeHandler7] = useState(false)

  const cardsData = [
    {
      id: 1,
      company_name: 'Сбербанк России',
      company_logo: sberLogo,
      description: 'СберБанк — крупнейший банк в России, Центральной и Восточной Европе, один из ведущих международных финансовых институтов',
      status: 'online',
      isSubscribe: isSubscribe1
    },

    {
        id: 2,
      company_name: 'Тинькофф банк',
      company_logo: tinkoffLogo,
      description: 'Тинькофф — онлайн-экосистема, основанная на финансовых и лайфстайл-услугах. Клиентами Тинькофф стали 19 млн человек по всей России.Тинькофф — третий крупнейший банк страны по количеству активных клиентов.',
      status: 'online',
      isSubscribe: isSubscribe2
    },
    {
        id: 3,
      company_name: 'Альфа Банк',
      company_logo: alfabankLogo,
      description: 'Альфа Банк - крупнейший частный банк в России, занимающий четвёртое место по размеру активов.',
      status: 'online',
      isSubscribe: isSubscribe3
    },
    {
        id: 4,
      company_name: 'Россельхоз Банк',
      company_logo: rhbLogo,
      description: 'Россельхоз Банк сегодня это универсальный коммерческий банк, предоставляющий все виды банковских услуг и занимающий лидирующие позиции в финансировании агропромышленного комплекса России.',
      status: 'online',
      isSubscribe: isSubscribe4
    },

    {
        id: 5,
        company_name: 'Сбербанк России',
        company_logo: sberLogo,
        description: 'СберБанк — крупнейший банк в России, Центральной и Восточной Европе, один из ведущих международных финансовых институтов',
        status: 'online',
        isSubscribe: isSubscribe5
      },

      {
        id: 6,
      company_name: 'Тинькофф банк',
      company_logo: tinkoffLogo,
      description: 'Тинькофф — онлайн-экосистема, основанная на финансовых и лайфстайл-услугах. Клиентами Тинькофф стали 19 млн человек по всей России.Тинькофф — третий крупнейший банк страны по количеству активных клиентов.',
      status: 'online',
      isSubscribe: isSubscribe6
    },

    {
        id: 7,
      company_name: 'Альфа Банк',
      company_logo: alfabankLogo,
      description: 'Альфа Банк - крупнейший частный банк в России, занимающий четвёртое место по размеру активов.',
      status: 'online',
      isSubscribe: isSubscribe7
    },
  ]

  const subscribeHandler = (id) => {
    switch (id) {
        case 1:
            subscribeHandler1(!isSubscribe1)
            break;

        case 2:
            subscribeHandler2(!isSubscribe2)
            break;

        case 3:
            subscribeHandler3(!isSubscribe3)
            break;

        case 4:
            subscribeHandler4(!isSubscribe4)
            break;
        case 5:
            subscribeHandler5(!isSubscribe5)
            break;
            case 6:
        subscribeHandler6(!isSubscribe6)
        break;
        case 7:
        subscribeHandler7(!isSubscribe7)
        break;
        

        default:
            break;
    }
  }

  const companies = cardsData.map(c => (
      <chakra.div 
        my='30px'
        mx={{base: 'auto', xl: '0'}} 
        px='10px' 
        width={{base: '100%', md: '80%', xl: '50%'}}
      >
          <CompanyCard data={c} changeSubscrStatus={subscribeHandler} />
      </chakra.div>
    
  ))
    return (
        <Flex justifyContent={'space-between'} flexWrap={'wrap'} mt='80px'>
              {companies}
            </Flex>
    );
}

export default CompanyCardsSection;