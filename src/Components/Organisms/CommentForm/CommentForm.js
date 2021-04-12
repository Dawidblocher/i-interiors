import styled from 'styled-components';
import Input from 'src/Components/Atoms/Input/Input';
import Textarea from 'src/Components/Atoms/Textarea/Textarea';
import PrimaryBtn from 'src/Components/Atoms/PrimaryBtn/PrimaryBtn';

const CommentWrapper = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 0;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 85%);
    max-width: 500px;
    position: absolute;
    top: ${props => props.top + 'px'};
    left: ${props => props.left + 'px'};
`;

const CommentForm = (props) => (
    <CommentWrapper top={props.x} left={props.y}>
        <Input type='text' placeholder="tytuł komentarza"></Input>
        <Textarea rows="10" placeholder='Twój komentarz' />
        <PrimaryBtn type='submit'>Dodaj</PrimaryBtn>
    </CommentWrapper>
)

export default CommentForm;