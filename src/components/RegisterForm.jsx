import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, VStack } from '@chakra-ui/react';
import React from 'react';
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

    return (
        <>

            <Formik
                onSubmit={onSubmit}
                initialValues={initialValues}
            >
                {(props) => (
                    <Form autoComplete="off" >
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
                                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
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
                                            color='white' 
                                            fontSize={'14px'}
                                        >
                                            Пароль
                                        </FormLabel>
                                        <InputGroup size='md'>
                                            <Input
                                                id='password'
                                                pr='4.5rem'
                                                type={'password'}
                                                color='blackAlpha.500'
                                                bg='white'
                                                {...field}
                                            />
                                        </InputGroup>
                                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
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
                                            color='white' 
                                            fontSize={'14px'}
                                        >
                                            Подтверждение пароля
                                        </FormLabel>
                                        <InputGroup size='md'>
                                            <Input
                                                id='confirmpassword'
                                                pr='4.5rem'
                                                type={'password'}
                                                color='blackAlpha.500'
                                                bg='white'
                                                {...field}
                                            />
                                        </InputGroup>
                                        <FormErrorMessage>{form.errors.confirmpassword}</FormErrorMessage>


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
                            Зарегистрироваться
                        </Button>
                    </Form>
                )}
            </Formik>


        </>
    );
}

export default RegisterForm;