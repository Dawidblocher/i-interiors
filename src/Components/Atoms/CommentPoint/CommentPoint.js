import React from 'react'
import styled from 'styled-components'

const CommentPointStyled = styled.div`
    width: 12px;
    height: 12px;
    background-color: red;
    position: absolute;
    top: ${props => props.top + 'px'};
    left: ${props => props.left + 'px'};
    border-radius: 50%;
    border: 1px solid #fff;
    z-index: 2;
    cursor:pointer;
`

const CommentPoint = (props) => <CommentPointStyled top={props.y} left={props.x} onClick={props.onClick}></CommentPointStyled>

export default CommentPoint; 