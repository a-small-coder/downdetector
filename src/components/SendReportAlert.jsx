import React from 'react';
import { Button, useToast, } from '@chakra-ui/react'
import Success from './Toasts/Success';
import Warning from './Toasts/Warning';

function SendReportAlert(props) {
    const toast = useToast({
        variant: 'top-accent',
        position: 'top-left',
        isClosable: true,
    })

    const sendReport = () => {
        let now = new Date().getTime();
        if (props.reportTime >= 0 && now - props.reportTime > 10000){
           
            props.setReportTime(props.id, now)
            toast({
                render: () => (
                    <Success/>
                  ),
            })
        }
        else{
            toast({
                render: () => (
                    <Warning 
                        title='Вы недавно уже отправили репорт'
                        text='Через некоторое время можно будет отправить повторно'
                    />
                  ),
            })
        }
        

    }

    return (
        <Button
            variant={'solid'}
            h='12'
            maxW='264px'
            w='100%'
            px='55px'
            mr={{ base: '0', md: '16px' }}
            mb={{ base: '4', md: '0' }}
            bg='gray.700'
            color='white'
            fontFamily="Inter"
            fontSize={'18px'}
            fontWeight={'600'}
            fontStyle="normal;"
            _active={{ bg: 'gray.800' }}
            _hover={{ bg: 'gray.800' }}
            onClick={sendReport}
        >
            Отправить отчет
        </Button>
    )
}

export default SendReportAlert;