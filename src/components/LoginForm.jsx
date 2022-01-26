import { Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const passwordValidation = (password) =>{
    let isError = false
    let message = ''
    if (password === '') {
        message = 'Обязательное поле'
        isError = true
    }
    return isError, message
}

function LoginForm(props) {
    const [login, setLogin] = useState('')
    const handleLoginChange = (e) => setLogin(e.target.value)
    const loginIsError = login === ''

    const [password, setPassword] = useState('')
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const [passwordIsError, passFieldMessage] = passwordValidation(password)

    const [showPass, setShowPass] = useState(false)
    const ShowPassHandleClick = () => setShowPass(!showPass)


    return (
        <>
            <VStack spacing={'2'}>
                <FormControl isRequired>
                    <FormLabel htmlFor='login'>Логин</FormLabel>
                    <Input
                        id='login'
                        type='text'
                        placeholder='Enter username or email'
                        value={login}
                        onChange={handleLoginChange}
                        isInvalid={loginIsError}
                    />
                    {!loginIsError ? (
                        <FormHelperText>
                            Введите свой ник или почту
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>Обязательное поле</FormErrorMessage>
                    )}
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor='password'>Пароль</FormLabel>
                    <InputGroup size='md'>
                        <Input
                            id='password'
                            pr='4.5rem'
                            type={showPass ? 'text' : 'password'}
                            placeholder='Enter password'
                            value={password}
                            onChange={handlePasswordChange}
                            isInvalid={passwordIsError}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={ShowPassHandleClick} variant='link'>
                                {showPass ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    {!passwordIsError ? (
                        <FormHelperText>
                            Введите пароль
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>{passFieldMessage}</FormErrorMessage>
                    )}
                </FormControl>
            </VStack>
        </>
    );
}

export default LoginForm;