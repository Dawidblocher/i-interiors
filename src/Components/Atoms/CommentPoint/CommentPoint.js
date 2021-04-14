import React from 'react'
import styled from 'styled-components'

const CommentPointStyled = styled.div`
    color: #fff;
    width: 21px;
    height: 21px;
    background-color: ${props => props.theme.accentColor};
    position: absolute;
    top: ${props => props.top + 'px'};
    left: ${props => props.left + 'px'};
    border-radius: 50%;
    border: 1px solid ${props => props.theme.accentColor};;
    z-index: 2;
    cursor:pointer;
    transition: box-shadow .3s;
    box-shadow: 0px 0px 0px 0px ${props => props.theme.accentColor};;
    font-size: 12px;
    line-height: 21px;
    text-align: center;

    &:hover{
        box-shadow: 0px 0px 0px 3px ${props => props.theme.accentColor};;
    }

`

const CommentPoint = (props) => <CommentPointStyled top={props.y} left={props.x} onClick={props.onClick}>{props.children +1}</CommentPointStyled>

export default CommentPoint; 