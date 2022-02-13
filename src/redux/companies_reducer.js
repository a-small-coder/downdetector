import sberLogo from '../assets/sberLogo.svg';
import tinkoffLogo from '../assets/Tinkoff.svg';
import alfabankLogo from '../assets/AlfaLogo.svg';
import mts from '../assets/mts_logo.svg';
import pochta from '../assets/Pochta_Bank_logo.svg';
import raiff from '../assets/Raiff_logo.svg';
import vtb from '../assets/vtb_logo.svg';
import home from '../assets/houme_bank_logo.svg';
import gasprom from '../assets/gasprom.svg';
import otkrytie from '../assets/otkrytie_logo.svg';

const SET_COMPANIES = 'SET_COMPANIES'
const SET_COMPANY_SUBSCRIBE_STATUS = 'SET_COMPANY_SUBSCRIBE_STATUS'
const SET_CURRENT_COMPANY = 'SET_CURRENT_COMPANY'
const SET_LAST_REPORT_SENDING_TIME = 'SET_LAST_REPORT_SENDING_TIME'
const SET_STATUS_DATA = 'SET_STATUS_DATA'

const tinkoffGraphs = getDataForGraph()
const sberGraphs = getDataForGraph()
const alfaGraphs = getDataForGraph()
const rhbGraphs = getDataForGraph()


const initialState = {
    companies: [
        {
            id: 1,
            company_name: 'Сбербанк',
            company_logo: sberLogo,
            description: 'СберБанк — крупнейший банк в России, Центральной и Восточной Европе, один из ведущих международных финансовых институтов',
            status: 'online',
            isSubscribe: false,
            link: 'sberbank',
            dataGraphPerDay: sberGraphs[0],
            dataGraphPerHour: sberGraphs[1],
            lastSendingReportTime: 0,
          },
      
          {
            id: 2,
            company_name: 'Тинькофф',
            company_logo: tinkoffLogo,
            description: 'Тинькофф — онлайн-экосистема, основанная на финансовых и лайфстайл-услугах. Клиентами Тинькофф стали 19 млн человек по всей России.Тинькофф — третий крупнейший банк страны по количеству активных клиентов.',
            status: 'online',
            isSubscribe: false,
            link: 'tinkoff',
            dataGraphPerDay: tinkoffGraphs[0],
            dataGraphPerHour: tinkoffGraphs[1],
            lastSendingReportTime: 0,
          },
          {
              id: 3,
            company_name: 'Альфа-банк',
            company_logo: alfabankLogo,
            description: 'Альфа Банк - крупнейший частный банк в России, занимающий четвёртое место по размеру активов.',
            status: 'online',
            isSubscribe: false,
            link: 'alfa-bank',
            dataGraphPerDay: alfaGraphs[0],
            dataGraphPerHour: alfaGraphs[1],
            lastSendingReportTime: 0,
          },
          {
            id: 4,
            company_name: 'Газпромбанк',
            company_logo: gasprom,
            description: ' ',
            status: 'online',
            isSubscribe: false,
            link: 'gasprombank',
            dataGraphPerDay: rhbGraphs[0],
            dataGraphPerHour: rhbGraphs[1],
            lastSendingReportTime: 0,
          },
          {
            id: 5,
            company_name: 'Банк ВТБ',
            company_logo: vtb,
            description: ' ',
            status: 'online',
            isSubscribe: false,
            link: 'vtb-bank',
            dataGraphPerDay: rhbGraphs[0],
            dataGraphPerHour: rhbGraphs[1],
            lastSendingReportTime: 0,
          },
          {
            id: 6,
            company_name: 'Райффайзенбанк',
            company_logo: raiff,
            description: ' ',
            status: 'online',
            isSubscribe: false,
            link: 'raiffayzenbank',
            dataGraphPerDay: rhbGraphs[0],
            dataGraphPerHour: rhbGraphs[1],
            lastSendingReportTime: 0,
          },
          {
            id: 7,
          company_name: 'МТС Банк',
          company_logo: mts,
          description: '',
          status: 'online',
          isSubscribe: false,
          link: 'mts-bank',
          dataGraphPerDay: alfaGraphs[0],
          dataGraphPerHour: alfaGraphs[1],
          lastSendingReportTime: 0,
        },
        {
          id: 8,
          company_name: 'Почта Банк',
          company_logo: pochta,
          description: ' ',
          status: 'online',
          isSubscribe: false,
          link: 'pochta-bank',
          dataGraphPerDay: rhbGraphs[0],
          dataGraphPerHour: rhbGraphs[1],
          lastSendingReportTime: 0,
        },
        {
          id: 9,
          company_name: 'Открытие Банк',
          company_logo: otkrytie,
          description: ' ',
          status: 'online',
          isSubscribe: false,
          link: 'otkrytie-bank',
          dataGraphPerDay: rhbGraphs[0],
          dataGraphPerHour: rhbGraphs[1],
          lastSendingReportTime: 0,
        },
        {
          id: 10,
          company_name: 'Хоум Кредит Банк',
          company_logo: home,
          description: '',
          status: 'online',
          isSubscribe: false,
          link: 'home-credit-bank',
          dataGraphPerDay: rhbGraphs[0],
          dataGraphPerHour: rhbGraphs[1],
          lastSendingReportTime: 0,
        },
    ],
    current_company: {}

}

const companiesReducer = (state=initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        
        case SET_COMPANIES:
            stateCopy.companies = action.companiesData.map( c => {
                let link = c.service_name.link("efim360.ru")
                let company = {
                    id: c.id,
                    company_name: c.service_name,
                    description: c.description,
                    status: c.status,
                    company_logo: tinkoffLogo,
                    isSubscribe: false,
                    link: link,
                    dataGraphPerDay: sberGraphs[0],
                    dataGraphPerHour: sberGraphs[1],
                    lastSendingReportTime: 0,
                }
                return company
                
            })
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

        case SET_LAST_REPORT_SENDING_TIME:
            stateCopy.companies = stateCopy.companies.map( c=> {
                if (c.id === action.id){
                    c.lastSendingReportTime = action.time
                    return c
                }
                return c
            })
            return stateCopy;
        
        case SET_STATUS_DATA:
            let dataGraphPerHour = {title: 'График за последние сутки'} 
            action.forEach(element => {
                dataGraphPerHour.data.push(element.status)
                dataGraphPerHour.labels.push(element.time)
            });
            stateCopy.companies = stateCopy.companies.map( c=> {
                if (c.id === action[0].service_id){
                    c.dataGraphPerHour = dataGraphPerHour
                    return c
                }
                return c
            })
            return stateCopy

        default:
            return state;
    }
}
export const setCompaniesAC = (companiesData) => ({type: SET_COMPANIES, companiesData: companiesData})
export const setCurrentCompanyAC = (companyData) => ({type: SET_CURRENT_COMPANY, companyData: companyData})
export const setCompanySubscribeStatusAC = (companyId) => ({type: SET_COMPANY_SUBSCRIBE_STATUS, companyId: companyId})
export const setReportTimeAC = (companyId, time) => ({type: SET_LAST_REPORT_SENDING_TIME, id: companyId, time: time})
export const setStatusDataAC = (dataArray) => ({type: SET_STATUS_DATA, dataArray: dataArray})
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
  return [dataGraphPerDay, dataGraphPerHour]
}