import sberLogo from '../assets/noviy-logotip-sberbank.svg';
import tinkoffLogo from '../assets/тинькофф.svg';
import alfabankLogo from '../assets/Alfa-Bank.png';
import rhbLogo from '../assets/rosselhos-logo.png'

const SET_COMPANIES = 'SET_COMPANIES'
const SET_COMPANY_SUBSCRIBE_STATUS = 'SET_COMPANY_SUBSCRIBE_STATUS'
const SET_CURRENT_COMPANY = 'SET_CURRENT_COMPANY'

const tinkoffGraphs = getDataForGraph()
const sberGraphs = getDataForGraph()
const alfaGraphs = getDataForGraph()
const rhbGraphs = getDataForGraph()


const initialState = {
    companies: [
        {
            id: 1,
            company_name: 'Сбербанк России',
            company_logo: sberLogo,
            description: 'СберБанк — крупнейший банк в России, Центральной и Восточной Европе, один из ведущих международных финансовых институтов',
            status: 'online',
            isSubscribe: false,
            link: 'sberbank',
            dataGraphPerDay: sberGraphs[0],
            dataGraphPerHour: sberGraphs[1],
          },
      
          {
            id: 2,
            company_name: 'Тинькофф банк',
            company_logo: tinkoffLogo,
            description: 'Тинькофф — онлайн-экосистема, основанная на финансовых и лайфстайл-услугах. Клиентами Тинькофф стали 19 млн человек по всей России.Тинькофф — третий крупнейший банк страны по количеству активных клиентов.',
            status: 'online',
            isSubscribe: false,
            link: 'tinkoff',
            dataGraphPerDay: tinkoffGraphs[0],
            dataGraphPerHour: tinkoffGraphs[1],
          },
          {
              id: 3,
            company_name: 'Альфа Банк',
            company_logo: alfabankLogo,
            description: 'Альфа Банк - крупнейший частный банк в России, занимающий четвёртое место по размеру активов.',
            status: 'online',
            isSubscribe: false,
            link: 'alfabank',
            dataGraphPerDay: alfaGraphs[0],
            dataGraphPerHour: alfaGraphs[1],
          },
          {
              id: 4,
            company_name: 'Россельхоз Банк',
            company_logo: rhbLogo,
            description: 'Россельхоз Банк сегодня это универсальный коммерческий банк, предоставляющий все виды банковских услуг и занимающий лидирующие позиции в финансировании агропромышленного комплекса России.',
            status: 'online',
            isSubscribe: false,
            link: 'rhb',
            dataGraphPerDay: rhbGraphs[0],
            dataGraphPerHour: rhbGraphs[1],
          },
    ],
    current_company: {}

}

const companiesReducer = (state=initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        
        case SET_COMPANIES:
            stateCopy.companies = action.companiesData
            return stateCopy;

        case SET_CURRENT_COMPANY:
          stateCopy.current_company = action.companyData
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
export const setCurrentCompanyAC = (companyData) => ({type: SET_CURRENT_COMPANY, companyData: companyData})
export const setCompanySubscribeStatusAC = (companyId) => ({type: SET_COMPANY_SUBSCRIBE_STATUS, companyId: companyId})
export default companiesReducer

function getDataForGraph(){
  function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }

  function getStatus(i, val){
      if (i < val){
          return 0
      }
      return 1
  }
  
    function getLabel(i){
        i = i % 29
        return `${i}.02`
    }

  let statusPerHour = []
  let statusPerHourLabels = []
  for(let i=0; i < 24; i++){
      statusPerHour.push(getStatus(getRandomIntInclusive(0, 40), 3))
      statusPerHourLabels.push(`${i}:00`)
  }
  let statusPerDay = []
  let statusPerDayLabels = []
  for(let i=0; i < 29; i++){
      statusPerDay.push(getStatus(getRandomIntInclusive(0, 20), 3) * getRandomIntInclusive(1, 2))
      statusPerDayLabels.push(getLabel(i))
  }
  statusPerDay.push('5', '0')
  statusPerHour.push('2', '0')

  const  dataGraphPerDay = {
      title: 'График за последний месяц',
      data: statusPerDay,
      labels: statusPerDayLabels
  }

  const dataGraphPerHour = {
      title: 'График за последние сутки',
      data: statusPerHour,
      labels: statusPerHourLabels
  }

  console.log(statusPerDay)
  console.log(statusPerDayLabels)

  return [dataGraphPerDay, dataGraphPerHour]
}