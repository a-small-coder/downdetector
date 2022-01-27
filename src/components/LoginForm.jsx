import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, VStack } from '@chakra-ui/react';
import React from 'react';
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

    return (
        <>

            <Formik
                onSubmit={onSubmit}
                initialValues={initialValues}
            >
                {(props) => (
                    <Form autoComplete="off">
                        
                            <VStack spacing={3}>


                                <Field name='login'>
                                    {({ field, form }) => (
                                        <FormControl 
                                            isInvalid={form.errors.login && form.touched.login} 
                                            px={{base: '0', sm: '16'}} 
                                            display={'flex'} 
                                            flexDirection={'column'} 
                                            alignItems={'center'}
                                        >
                                            <FormLabel 
                                                htmlFor='login' 
                                                color='white' 
                                                fontWeight={'400'} 
                                                fontSize={'14px'}
                                            >
                                                E-mail
                                            </FormLabel>
                                            <Input 
                                                {...field}
                                                id='login' 
                                                placeholder='example@my.domain' 
                                                type='email' 
                                                ref={props.FocusRef} 
                                                color='blackAlpha.500' 
                                                bg='white'
                                            />
                                            <FormErrorMessage>
                                                {form.errors.login}
                                            </FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name='password'>
                                    {({ field, form }) => (
                                        <FormControl i
                                            sInvalid={form.errors.password && form.touched.password} 
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