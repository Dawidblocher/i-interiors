import React from 'react'
import styled from 'styled-components'
import Input from 'src/Components/Atoms/Input/Input'
import PrimaryBtn from 'src/Components/Atoms/PrimaryBtn/PrimaryBtn'

const LoginFormWrapper = styled.form`
        position: relative;
        padding: 50px;
        display: flex;
        flex-direction: column;
        max-width: 500px;
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
            <InputStyled type='text' placeholder='Email adres' />
            <InputStyled type='password' placeholder='Hasło'/>
            <PrimaryBtnStyled type='submit' >Zaloguj się</PrimaryBtnStyled>
        </LoginFormWrapper>
        

    )
}

export default LoginForm;