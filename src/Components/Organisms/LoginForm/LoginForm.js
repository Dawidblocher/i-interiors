import React from 'react'
import styled from 'styled-components'
import Input from 'src/Components/Atoms/Input/Input'
import PrimaryBtn from 'src/Components/Atoms/PrimaryBtn/PrimaryBtn'
import { Formik, Form } from 'formik'

const LoginFormWrapper = styled.div`
        position: relative;
        padding: 70px 60px;
        display: flex;
        flex-direction: column;
        max-width: 600px;
        margin: 20px auto;
        background-color: #fff;
        border: 1px solid #d8d8d8;
        align-items:flex-start;
`

const InputStyled = styled(Input)`
    border: 1px solid #d8d8d8;
    margin: 0px 0 30px; 
    border-radius: 0;
width: 100%;
`

const PrimaryBtnStyled = styled(PrimaryBtn)`
    padding: 15px 25px;
    text-transform: uppercase;
`

const LoginForm = (props) => {

    return (
        <LoginFormWrapper id="workspace-wrapper" >
            <h1>Zaloguj się</h1>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                    setSubmitting(false)
                }}>
                {({ values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting, 
                }) => (
                    <Form>
                        <InputStyled 
                            type='text' placeholder='Email adres' name='email' 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <InputStyled 
                            type='password' placeholder='Hasło' name='password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}

                        />
                        <PrimaryBtnStyled type='submit' >Zaloguj się</PrimaryBtnStyled>
                    </Form>
                )}
            </Formik>
            
        </LoginFormWrapper>
        

    )
}

export default LoginForm;