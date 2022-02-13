import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, VStack } from '@chakra-ui/react';
import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import PrefixUrl, {postApiRequest} from '../utils/api_requests.js'

function LoginForm(props) {
    const onSubmit = (values, actions) => {
        console.log(values)
        const goodResponse = (responseData) => {
            props.loginF(responseData.access_token)
            props.setEmail(values.email)
            actions.setSubmitting(false)
        }
        const badResponse = (data) => {
            actions.setSubmitting(false)
        }
        postApiRequest(`${PrefixUrl}auth/`, values, goodResponse, badResponse)
    }

    const validation = Yup.object({
        email: Yup.string()
            .email('Неверный формат почтового адреса')
            .required('Поле "Email" обязательно для заполнения.'),
        password: Yup.string()
            .required('Поле "Пароль" обязательно для заполнения.')
            .min(6, "Пароль должен содержать 6 или более символов")
            .max(25, "Пароль не может содержать более 24 символов"),
    })

    const initialValues = {
        email: '',
        password: '',
    }

    return (
        <>

            <Formik
                onSubmit={onSubmit}
                initialValues={initialValues}
                validationSchema={validation}
            >
                {(props) => (
                    <Form autoComplete="off">
                        
                            <VStack spacing={3}>


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
                                                color='white' 
                                                fontWeight={'400'} 
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
                                                color='blackAlpha.500' 
                                                bg='white'
                                            />
                                            <FormErrorMessage>
                                                {form.errors.email}
                                            </FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name='password'>
                                    {({ field, form }) => (
                                        <FormControl 
                                            isInvalid={form.errors.password && form.touched.password} 
                                            px={{base: '0', sm: '16'}} 
                                            display={'flex'} 
                                            flexDirection={'column'} 
                                            alignItems={'center'}
                                        >
                                            <FormLabel 
                                                htmlFor='password' 
                                                color='white' 
                                                fontWeight={'400'} 
                                                fontSize={'14px'}
                                            >
                                                Пароль
                                            </FormLabel>
                                            <InputGroup size='md'>
                                                <Input
                                                    id='password'
                                                    pr='4.5rem'
                                                    type={'password'}
                                                    bg='white'
                                                    color='blackAlpha.500'
                                                    {...field}
                                                />
                                            </InputGroup>
                                            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
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
                                fontSize={'14px'} 
                                fontWeight={'600'} 
                                _active={{bg: 'gray.800'}} 
                                _hover={{bg: 'gray.800'}} 
                            >
                                Войти
                            </Button>           
                    </Form>
                )}
            </Formik>


        </>
    );
}

export default LoginForm;