import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, ModalBody, ModalFooter, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';

function RegisterForm(props) {

    const onSubmit = (values, actions) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
        }, 1000)
    }

    const initialValues = {
        email: '',
        password: '',
        confirmpassword: ''
    }
    const changeForm = props.changeForm

    const [showPass, setShowPass] = useState(false)
    const ShowPassHandleClick = () => setShowPass(!showPass)

    const [showConfirmPass, setShowConfirmPass] = useState(false)
    const ShowConfPassHandleClick = () => setShowConfirmPass(!showConfirmPass)

    return (
        <>

            <Formik
                onSubmit={onSubmit}
                initialValues={initialValues}
            >
                {(props) => (
                    <Form autoComplete="off" >

                        
                            <ModalBody pb={6}>
                                <VStack spacing={3}>


                                    <Field name='email'>
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.email && form.touched.email} isRequired>
                                                <FormLabel htmlFor='email'>Email</FormLabel>
                                                <Input {...field} id='email' placeholder='Example@mail.ru' type='email' />
                                                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
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
                                    <Field name='confirmpassword'>
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.confirmpassword && form.touched.confirmpassword} isRequired>
                                                <FormLabel htmlFor='confirmpassword'>Подтверждение пароля</FormLabel>
                                                <InputGroup size='md'>
                                                    <Input
                                                        id='confirmpassword'
                                                        pr='4.5rem'
                                                        type={showConfirmPass ? 'text' : 'password'}
                                                        placeholder='Повторите пароль'
                                                        {...field}
                                                    />
                                                    <InputRightElement width='4.5rem'>
                                                        <Button h='1.75rem' size='sm' onClick={ShowConfPassHandleClick} variant='link'>
                                                            {showConfirmPass ? 'Скрыть' : 'Показать'}
                                                        </Button>
                                                    </InputRightElement>
                                                </InputGroup>
                                                <FormErrorMessage>{form.errors.confirmpassword}</FormErrorMessage>


                                            </FormControl>

                                        )}
                                    </Field>
                                </VStack>
                            </ModalBody>

                            <ModalFooter>
                                <Button type='submit' isLoading={props.isSubmitting} colorScheme='purple' mr={3}>
                                    Зарегистрироваться
                                </Button>
                                <Button onClick={changeForm}>Войти</Button>
                            </ModalFooter>
                    </Form>
                )}
            </Formik>


        </>
    );
}

export default RegisterForm;