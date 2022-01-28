import {  chakra, HStack, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, useRadioGroup } from '@chakra-ui/react';
import React from 'react';
import LoginForm from './LoginForm';
import RadioBox from './RadioBox';
import RegisterForm from './RegisterForm';

const LoginIcon = (props) => (
    <svg style={{marginLeft: '12px'}} width="31" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.81 5.44a1.5 1.5 0 0 1 0 2.12l-6 6a1.5 1.5 0 0 1-2.12 0l-3-3a1.5 1.5 0 0 1 2.12-2.12l1.94 1.939 4.94-4.94a1.5 1.5 0 0 1 2.12 0Z" fill="#fff" fillOpacity=".92" /><path d="M25.25 5c0-2.763-2.238-5-5-5s-5 2.237-5 5 2.238 5 5 5 5-2.237 5-5Zm-5 7c3.605 0 10 1.23 10 5.538v.87c0 .88-.713 1.592-1.592 1.592H11.842c-.88 0-1.592-.713-1.592-1.592v-.87c0-4.307 6.395-5.538 10-5.538Z" fill="#fff" fillOpacity=".92" /></svg>
)

const RegIcon = (props) => (
    <svg style={{marginLeft: '12px'}} width="31" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 5c0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5s-2.238 5-5 5c-2.763 0-5-2.237-5-5Zm5 7c-3.605 0-10 1.23-10 5.538v.87C.25 19.288.963 20 1.842 20h16.816c.88 0 1.592-.713 1.592-1.592v-.87c0-4.307-6.395-5.538-10-5.538Zm14.5-8a1.5 1.5 0 0 0-1.5 1.5V8h-2.5a1.5 1.5 0 0 0 0 3h2.5v2.5a1.5 1.5 0 0 0 3 0V11h2.5a1.5 1.5 0 0 0 0-3h-2.5V5.5a1.5 1.5 0 0 0-1.5-1.5Z" fill="#fff" fillOpacity=".92" /></svg>
)

function AuthFormModal(props) {
    const [isLoginForm, setIsLoginForm] = React.useState(true)
    const radioClickHandler = () => {
        setIsLoginForm(!isLoginForm)
        console.log('hey')
    }

    const options = ['reg', 'border', 'login']

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'login',
        onChange: radioClickHandler,
    })

    const group = getRootProps()

    const isOpen = props.isOpen
    const onClose = props.onClose

    const FocusRef = React.useRef()

    const formSubmit = (formData) => {
        console.log('login form is submiting...')
    }

    return (
        <>
            <Modal
                closeOnOverlayClick={true}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                initialFocusRef={FocusRef}
            >
                <ModalOverlay />
                <ModalContent
                    bg='#6B46C1'
                    borderRadius={'16px'}
                    p={{ base: '6', md: '8' }}
                    maxW='512px'
                    box-shadow='16px 16px 14px #44337A, 32px 32px 135px -1px rgba(85, 60, 154, 0.6)'
                >
                    <ModalHeader p='0'>

                        <HStack {...group} justifyContent={'space-between'}>
                            {options.map((value) => {
                                const radio = getRadioProps({ value })
                                if (value === 'border'){
                                    return (
                                        <chakra.div 
                                            key={value}
                                            borderRight='1px solid white'
                                            w='1px'
                                            minH='8'
                                            mr='6'
                                            ml='6'
                                        >
                                        </chakra.div>
                                    )
                                }
                                else{
                                    return (
                                        <RadioBox key={value} {...radio}>
                                            {value === 'reg' ? 'Регистрация' : 'Вход' } 
                                            {value === 'reg' ? <RegIcon/> :  <LoginIcon/>} 
                                        </RadioBox>
                                    )
                                }
                            })}
                        </HStack>

                    </ModalHeader>
                    <ModalBody pt='6' pb='0' px='0'>
                        {isLoginForm ? (
                            <LoginForm formSubbmit={formSubmit} FocusRef={FocusRef} />
                        ) : (
                            <RegisterForm formSubbmit={formSubmit} FocusRef={FocusRef} />
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AuthFormModal;

