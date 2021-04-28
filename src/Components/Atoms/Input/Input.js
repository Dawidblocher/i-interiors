import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.input`
    color: ${(props) => props.theme.textColor};
    padding: 10px 15px;
    border: 0;
    border-radius: 25px;
    margin: 10px;
    outline: none;
    font-size: 1.8rem;
    background: transparent;
`

const Input = (props) => <InputStyled 
    name={props.name} 
    type={props.type} 
    placeholder={props.placeholder} 
    className={props.className} 
    value={props.value}
    onChange={props.onChange}
    onBlur={props.onBlur}
    ></InputStyled>

export default Input; 