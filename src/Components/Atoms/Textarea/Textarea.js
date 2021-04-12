import styled from 'styled-components'

const StyledTextarea = styled.textarea`
    color: ${(props) => props.theme.textColor};
    padding: 15px 15px;
    border: 0;
    border-radius: 25px;
    margin: 10px;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
`;

const Textarea = (props) => (
    <StyledTextarea rows={props.rows} placeholder={props.placeholder} />
)

export default Textarea;