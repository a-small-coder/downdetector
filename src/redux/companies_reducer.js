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

const tinkoffGraphs = []
const sberGraphs = []
const alfaGraphs = []
const rhbGraphs = []

const bankNamesInRus = {
  'sberbank': {
    rus_name: 'Сбербанк',
    logo: sberLogo,
  },
  'tinkoff': {
    rus_name: 'Тинькофф',
    logo: tinkoffLogo,
  },
  'Alpha Bank': {
    rus_name: 'Альфа-банк',
    logo: alfabankLogo,
  },
  'Gazprom Bank': {
    rus_name: 'Газпромбанк',
    logo: gasprom,
  },
  'VTB Bank': {
    rus_name: 'Банк ВТБ',
    logo: vtb,
  },
  'MTS Bank': {
    rus_name: 'МТС Банк',
    logo: mts,
  },
  'Raiffaisen bank': {
    rus_name: 'Райффайзенбанк',
    logo: raiff,
  },
  'Pochta Bank': {
    rus_name: 'Почта Банк',
    logo: pochta,
  },
 'Otkritie Bank': {
  rus_name: 'Открытие Банк',
  logo: otkrytie,
},
  'Home Credit Bank': {
    rus_name: 'Хоум Кредит Банк',
    logo: home,
  },
}

const initialState = {
    companies: [
        {
            id: 0,
            company_name: 'sberbank',
            company_name_rus: getRusNameForService('sberbank'),
            company_logo: getActualServiceLogo('sberbank'),
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
            company_name: 'tinkoff',
            company_name_rus: getRusNameForService('tinkoff'),
            company_logo: getActualServiceLogo('tinkof', tinkoffLogo),
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
            company_name: 'Alpha Bank',
            company_name_rus: getRusNameForService('Alpha Bank'),
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
            company_name: 'Gazprom Bank',
            company_name_rus: getRusNameForService('Gazprom Bank'),
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
            company_name: 'VTB Bank',
            company_name_rus: getRusNameForService('VTB Bank'),
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
            company_name: 'Raiffaisen bank',
            company_name_rus: getRusNameForService('Raiffaisen bank'),
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
          company_name: 'MTS Bank',
          company_name_rus: getRusNameForService('MTS Bank'),
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
          company_name: 'Pochta Bank',
          company_name_rus: getRusNameForService('Pochta Bank'),
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
          company_name: 'Otkritie Bank',
          company_name_rus: getRusNameForService('Otkritie Bank'),
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
          company_name: 'Home Credit Bank',
          company_name_rus: getRusNameForService('Home Credit Bank'),
          company_logo: home,
          description: '',
          status: 'online',
          isSubscribe: false,
          link: encodeURIComponent('Home Credit Bank'),
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
                let link = encodeURIComponent(c.service_name)
                let company = {
                    id: c.id,
                    company_name: c.service_name,
                    company_name_rus: getRusNameForService(c.service_name),
                    description: c.description,
                    status: c.status,
                    company_logo: getActualServiceLogo(c.service_name),
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
            let dataGraphPerHour = {title: 'График за последние сутки', data: [], labels: []} 
            let dataGraphPerDay = {title: 'График за последние дни', data: [], labels: []}
            action.dataArray.forEach((element, i) => {
              if (action.dataArray.length > 20){

                if (i < 21){
                  dataGraphPerDay.data.push(element.status)
                  dataGraphPerDay.labels.push('')
                }
                if (action.dataArray.length - i < 21){
                  dataGraphPerHour.data.push(element.status)
                  dataGraphPerHour.labels.push('')
                }
                
              }              
              else{
                dataGraphPerDay.data.push(element.status)
                dataGraphPerDay.labels.push('')
                dataGraphPerHour.data.push(element.status)
                dataGraphPerHour.labels.push('')
              }
                
            });
            // fix axis
            dataGraphPerDay.data.push(2)
            dataGraphPerHour.data.push(2)
            dataGraphPerDay.data.push(0)
            dataGraphPerHour.data.push(0)
            
            stateCopy.companies = stateCopy.companies.map( c=> {
                if (c.id === action.companyId){
                    c.dataGraphPerHour = dataGraphPerHour
                    c.dataGraphPerDay = dataGraphPerDay
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
export const setStatusDataAC = (dataArray, id=0) => ({type: SET_STATUS_DATA, dataArray: dataArray, companyId: id})
export default companiesReducer


function getRusNameForService(service_name){
  let service_name_rus = bankNamesInRus[service_name]
  if (service_name_rus === undefined) {
    return service_name
  }
  return service_name_rus.rus_name
}

function getActualServiceLogo(service_name, logo){
  let service_logo = bankNamesInRus[service_name]
  if (service_logo === undefined) {
    return logo
  }
  return service_logo.logo
}