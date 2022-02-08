import React, { useState } from 'react';

import sberLogo from './assets/noviy-logotip-sberbank.svg';
import tinkoffLogo from './assets/tinkoff-logo.png';
import alfabankLogo from './assets/Alfa-Bank.png';
import rhbLogo from './assets/rosselhos-logo.png'
import CompanyCard from './CompanyCard';
import { Flex } from '@chakra-ui/react';


function CompanyCardsSection(props) {
    const [isSubscribe, subscribeHandler] = useState(false)

  const cardsData = [
    {
      company_name: 'Сбербанк России',
      company_logo: sberLogo,
      description: 'СберБанк — крупнейший банк в России, Центральной и Восточной Европе, один из ведущих международных финансовых институтов',
      status: 'online',
      isSubscribe: isSubscribe
    },

    {
      company_name: 'Тинькофф банк',
      company_logo: tinkoffLogo,
      description: 'Тинькофф — онлайн-экосистема, основанная на финансовых и лайфстайл-услугах. Клиентами Тинькофф стали 19 млн человек по всей России.Тинькофф — третий крупнейший банк страны по количеству активных клиентов.',
      status: 'online',
      isSubscribe: isSubscribe
    },
    {
      company_name: 'Альфа Банк',
      company_logo: alfabankLogo,
      description: 'Альфа Банк - крупнейший частный банк в России, занимающий четвёртое место по размеру активов.',
      status: 'online',
      isSubscribe: isSubscribe
    },
    {
      company_name: 'Россельхоз Банк',
      company_logo: rhbLogo,
      description: 'Россельхоз Банк сегодня это универсальный коммерческий банк, предоставляющий все виды банковских услуг и занимающий лидирующие позиции в финансировании агропромышленного комплекса России.',
      status: 'online',
      isSubscribe: isSubscribe
    },
  ]
    return (
        <Flex justifyContent={'space-between'} flexWrap={'wrap'} mt='80px' >
              <CompanyCard data={cardsData} changeSubscrStatus={subscribeHandler} />
            </Flex>
    );
}

export default CompanyCardsSection;