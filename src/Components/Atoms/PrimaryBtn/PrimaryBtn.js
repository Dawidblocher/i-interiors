import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 10px;
    background: ${(props) => props.theme.accentColor};
    color: #fff;
    border-radius: 10px;
    border: 0;
`;

const PrimaryBtn = (props) => (
    <StyledButton type={props.type}>{props.children}</StyledButton>
)

export default PrimaryBtn;