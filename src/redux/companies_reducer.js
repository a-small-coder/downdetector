import sberLogo from '../assets/noviy-logotip-sberbank.svg';
import tinkoffLogo from '../assets/tinkoff-logo.png';
import alfabankLogo from '../assets/Alfa-Bank.png';
import rhbLogo from '../assets/rosselhos-logo.png'

const SET_COMPANIES = 'SET_COMPANIES'
const   SET_COMPANY_SUBSCRIBE_STATUS = 'SET_COMPANY_SUBSCRIBE_STATUS'


const initialState = {
    companies: [
        {
            id: 1,
            company_name: 'Сбербанк России',
            company_logo: sberLogo,
            description: 'СберБанк — крупнейший банк в России, Центральной и Восточной Европе, один из ведущих международных финансовых институтов',
            status: 'online',
            isSubscribe: false,
            link: 'sberbank'
          },
      
          {
              id: 2,
            company_name: 'Тинькофф банк',
            company_logo: tinkoffLogo,
            description: 'Тинькофф — онлайн-экосистема, основанная на финансовых и лайфстайл-услугах. Клиентами Тинькофф стали 19 млн человек по всей России.Тинькофф — третий крупнейший банк страны по количеству активных клиентов.',
            status: 'online',
            isSubscribe: false,
            link: 'tinkoff'
          },
          {
              id: 3,
            company_name: 'Альфа Банк',
            company_logo: alfabankLogo,
            description: 'Альфа Банк - крупнейший частный банк в России, занимающий четвёртое место по размеру активов.',
            status: 'online',
            isSubscribe: false,
            link: 'alfabank'
          },
          {
              id: 4,
            company_name: 'Россельхоз Банк',
            company_logo: rhbLogo,
            description: 'Россельхоз Банк сегодня это универсальный коммерческий банк, предоставляющий все виды банковских услуг и занимающий лидирующие позиции в финансировании агропромышленного комплекса России.',
            status: 'online',
            isSubscribe: false,
            link: 'rhb'
          },
      
          {
              id: 5,
              company_name: 'Сбербанк России',
              company_logo: sberLogo,
              description: 'СберБанк — крупнейший банк в России, Центральной и Восточной Европе, один из ведущих международных финансовых институтов',
              status: 'online',
              isSubscribe: false,
              link: 'sberbank'
            },
      
            {
              id: 6,
            company_name: 'Тинькофф банк',
            company_logo: tinkoffLogo,
            description: 'Тинькофф — онлайн-экосистема, основанная на финансовых и лайфстайл-услугах. Клиентами Тинькофф стали 19 млн человек по всей России.Тинькофф — третий крупнейший банк страны по количеству активных клиентов.',
            status: 'online',
            isSubscribe: false,
            link: 'tinkoff'
          },
      
          {
              id: 7,
            company_name: 'Альфа Банк',
            company_logo: alfabankLogo,
            description: 'Альфа Банк - крупнейший частный банк в России, занимающий четвёртое место по размеру активов.',
            status: 'online',
            isSubscribe: false,
            link: 'alfabank'
          },
    ],

}

const companiesReducer = (state=initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        
        case SET_COMPANIES:
            stateCopy.companies = action.companiesData
            return stateCopy;

        case SET_COMPANY_SUBSCRIBE_STATUS:
            stateCopy.companies = stateCopy.companies.map( c=> {
                if (c.id === action.companyId){
                    c.isSubscribe = !c.isSubscribe
                    return c
                }
                return c
            })
            return stateCopy;
    
        default:
            return state;
    }
}
export const setCompaniesAC = (companiesData) => ({type: SET_COMPANIES, companiesData: companiesData})
export const setCompanySubscribeStatusAC = (companyId) => ({type: SET_COMPANY_SUBSCRIBE_STATUS, companyId: companyId})
export default companiesReducer