import { chakra, HStack, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, useRadioGroup, useToast } from '@chakra-ui/react';
import React from 'react';
import LoginForm from './LoginForm';
import RadioBox from './RadioBox';
import RegisterForm from './RegisterForm';
// Icons from library
import {
    FiUserCheck,
    FiUserPlus,
} from 'react-icons/fi'
import { connect } from 'react-redux';
import { setIsAutorizedAC, setUserEmailAC, setUserTokenAC } from '../redux/auth_reducer';
import Warning from './Toasts/Warning';

function AuthFormModal(props) {
    const [isLoginForm, setIsLoginForm] = React.useState(true)
    const radioClickHandler = () => {
        setIsLoginForm(!isLoginForm)
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

    const showServerFeedback = useToast({
        variant: 'top-accent',
        position: 'top-left',
        duration: 9000,
        isClosable: true,
    })

    const showFormError = (formData, formType) => {
        let message =  {
            title: "Что-то пошло не так...",
            text: "Проверте правильность данных",
        }
        if (formType === 'register'){
            switch(formData.response.status){
                case 500:
                    message.text = "Пользователь с таким email уже существует"
                break
                default:
            }
        }
        if (formType === 'login'){
            switch(formData.response.status){
                case 401:
                    message.text = "Неверный email или пароль"
                break
                case 422:
                    message.text = "Попробуйте ещё раз"
                break
                case 500:
                    message.text = "Попробуйте ещё раз"
                break
                default:

            }
        }
        showServerFeedback({
            render: () => (
                <Warning title={message.title} text={message.text}/>
              ),
        })
        console.log(formData)
    }

    const authorizeUser = (token) => {
        props.setIsAutorized(true)
        if(token != null){
            props.setUserToken(token)
        }
        
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
                                if (value === 'border') {
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
                                else {
                                    return (
                                        <RadioBox key={value} {...radio} fontFamily='Roboto'> 
                                            {value === 'reg' ? 'Регистрация' : 'Вход'}
                                            <chakra.span ml={1} fontSize='20px'>
                                                {value === 'reg' ? <FiUserPlus/> : <FiUserCheck/>}
                                            </chakra.span>
                                        </RadioBox>
                                    )
                                }
                            })}
                        </HStack>

                    </ModalHeader>
                    <ModalBody pt='6' pb='0' px='0'>
                        {isLoginForm ? (
                            <LoginForm showFeedback={showFormError} FocusRef={FocusRef} loginF={authorizeUser} setEmail={props.setUserEmail}/>
                        ) : (
                            <RegisterForm showFeedback={showFormError} FocusRef={FocusRef} loginF={authorizeUser} setEmail={props.setUserEmail}/>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUserToken: (token) => {
            dispatch(setUserTokenAC(token));
        },
        setUserEmail: (email) => {
            dispatch(setUserEmailAC(email));
        },
        setIsAutorized: (isAuthorized) => {
            dispatch(setIsAutorizedAC(isAuthorized));
        },
    }
}
const AuthFormModalContainer = connect(mapStateToProps, mapDispatchToProps)(AuthFormModal);

export default AuthFormModalContainer;

