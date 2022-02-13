import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, VStack } from '@chakra-ui/react';
import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import PrefixUrl, {postApiRequest} from '../utils/api_requests.js'

function RegisterForm(props) {

    const onSubmit = (values, actions) => {
        const sendingData ={
            username: values.email.slice(0, values.email.indexOf("@")),
            email: values.email,
            password: values.password,
            password2: values.confirmpassword
        }
        console.log(sendingData)
        const goodResponse = (responseData) => {
            props.loginF(responseData.access_token)
            props.setEmail(values.email)
            actions.setSubmitting(false)
        }
        const badResponse = (data) => {
            props.showFeedback(data)
            actions.setSubmitting(false)
        }
        postApiRequest(`${PrefixUrl}users/`, sendingData, goodResponse, badResponse)
    }

    const validation = Yup.object({
        email: Yup.string()
            .email('Неверный формат почтового адреса')
            .required('Поле "Email" обязательно для заполнения.'),
        password: Yup.string()
            .required('Поле "Пароль" обязательно для заполнения.')
            .min(8, "Пароль должен содержать 8 или более символов")
            .max(25, "Пароль не может содержать более 24 символов"),
        confirmpassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Пароли не совпадают.').required('Подтвердите пароль.'),
    })

    const initialValues = {
        email: '',
        password: '',
        confirmpassword: ''
    }

    return (
        <>

            <Formik
                onSubmit={onSubmit}
                initialValues={initialValues}
                validationSchema={validation}
            >
                {(props) => (
                    <Form autoComplete="off" >
                        <VStack spacing={3} fontFamily='Roboto'>


                            <Field name='email'>
                                {({ field, form }) => (
                                    <FormControl 
                                        isInvalid={form.errors.email && form.touched.email} 
                                        px={{base: '0', sm: '16'}} 
                                        display={'flex'} 
                                        flexDirection={'column'} 
                                        alignItems={'center'}
                                    >
                                        <FormLabel 
                                            htmlFor='email' 
                                            fontFamily='Roboto'
                                            color='white' 
                                            fontSize={'14px'}
                                        >
                                            E-mail
                                        </FormLabel>
                                        <Input 
                                            {...field} 
                                            id='email' 
                                            placeholder='example@my.domain' 
                                            type='email' 
                                            ref={props.FocusRef} 
                                            fontFamily='Roboto'
                                            color='black' 
                                            bg='white'
                                        />
                                        <FormErrorMessage color={'white'} fontFamily='Roboto'>{form.errors.email}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='password'>
                                {({ field, form }) => (
                                    <FormControl 
                                        isInvalid={form.errors.password && form.touched.password} 
                                        px={{base: '0', sm: '16'}} 
                                        display={'flex'} 
                                        flexDirection={'column'} alignItems={'center'}
                                    >
                                        <FormLabel 
                                            htmlFor='password' 
                                            fontFamily='Roboto'
                                            color='white' 
                                            fontSize={'14px'}
                                        >
                                            Пароль
                                        </FormLabel>
                                        <InputGroup size='md'>
                                            <Input
                                                id='password'
                                                pr='4.5rem'
                                                type='password'
                                                color='black'
                                                fontFamily='Roboto'
                                                bg='white'
                                                {...field}
                                            />
                                        </InputGroup>
                                        <FormErrorMessage color={'white'} fontFamily='Roboto'>{form.errors.password}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='confirmpassword'>
                                {({ field, form }) => (
                                    <FormControl 
                                        isInvalid={form.errors.confirmpassword && form.touched.confirmpassword} 
                                        px={{base: '0', sm: '16'}} 
                                        display={'flex'} 
                                        flexDirection={'column'} 
                                        alignItems={'center'}
                                    >
                                        <FormLabel 
                                            htmlFor='confirmpassword' 
                                            fontFamily='Roboto'
                                            color='white' 
                                            fontSize={'14px'}
                                        >
                                            Подтверждение пароля
                                        </FormLabel>
                                        <InputGroup size='md'>
                                            <Input
                                                id='confirmpassword'
                                                pr='4.5rem'
                                                type='password'
                                                fontFamily='Roboto'
                                                color='black'
                                                bg='white'
                                                {...field}
                                            />
                                        </InputGroup>
                                        <FormErrorMessage color={'white'} fontFamily='Roboto'>{form.errors.confirmpassword}</FormErrorMessage>


                                    </FormControl>

                                )}
                            </Field>
                        </VStack>
                        <Button 
                            type='submit' 
                            isLoading={props.isSubmitting} 
                            variant={'solid'} 
                            h='8' 
                            w='100%' 
                            bg='gray.700' 
                            color='white' 
                            mt='6' 
                            fontFamily='Roboto'
                            fontSize={'14px'} 
                            fontWeight={'600'} 
                            _active={{bg: 'gray.800'}} 
                            _hover={{bg: 'gray.800'}}
                        >
                            Зарегистрироваться
                        </Button>
                    </Form>
                )}
            </Formik>


        </>
    );
}

export default RegisterForm;