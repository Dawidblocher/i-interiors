import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 10px;
    background: ${(props) => props.theme.accentColor};
    color: #fff;
    border-radius: 10px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: background .3s, border .3s, color .3s;
    font-weight: 500;
    
    &:hover{
        border: 1px solid ${(props) => props.theme.accentColor};
        color: ${(props) => props.theme.accentColor};
        background: transparent;
    }

`;

const PrimaryBtn = (props) => (
    <StyledButton type={props.type} className={props.className}>{props.children}</StyledButton>
)

export default PrimaryBtn;