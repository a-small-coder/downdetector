import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, ModalBody, ModalFooter, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';

function LoginForm(props) {
    const onSubmit = (values, actions) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
        }, 1000)
    }

    const initialValues = {
        login: '',
        password: '',
    }
    const changeForm = props.changeForm

    const [showPass, setShowPass] = useState(false)
    const ShowPassHandleClick = () => setShowPass(!showPass)

    return (
        <>

            <Formik
                onSubmit={onSubmit}
                initialValues={initialValues}
            >
                {(props) => (
                    <Form autoComplete="off">
                        <ModalBody pb={6}>
                            <VStack spacing={3}>


                                <Field name='login'>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.login && form.touched.login} isRequired>
                                            <FormLabel htmlFor='login'>Email</FormLabel>
                                            <Input {...field} id='login' placeholder='Ваш логин' type='login' />
                                            <FormErrorMessage>{form.errors.login}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name='password'>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.password && form.touched.password} isRequired>
                                            <FormLabel htmlFor='password'>Пароль</FormLabel>
                                            <InputGroup size='md'>
                                                <Input
                                                    id='password'
                                                    pr='4.5rem'
                                                    type={showPass ? 'text' : 'password'}
                                                    placeholder='Придумайте пароль'
                                                    {...field}
                                                />
                                                <InputRightElement width='4.5rem'>
                                                    <Button h='1.75rem' size='sm' onClick={ShowPassHandleClick} variant='link'>
                                                        {showPass ? 'Скрыть' : 'Показать'}
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </VStack>
                        </ModalBody>
                        <ModalFooter>
                            <Button type='submit' isLoading={props.isSubmitting} colorScheme='purple' mr={3}>
                                Войти
                            </Button>
                            <Button onClick={changeForm}>Зарегистрироваться</Button>
                        </ModalFooter>
                    </Form>
                )}
            </Formik>


        </>
    );
}

export default LoginForm;