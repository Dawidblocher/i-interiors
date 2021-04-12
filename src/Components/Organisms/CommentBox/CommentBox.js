import styled from 'styled-components';
import Input from 'src/Components/Atoms/Input/Input';
import Textarea from 'src/Components/Atoms/Textarea/Textarea';
import PrimaryBtn from 'src/Components/Atoms/PrimaryBtn/PrimaryBtn';

const CommentWrapper = styled.div`
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
    width: 290px;
    height: 375px;
    z-index: 3;
`;

const Desc = styled.p`
    flex-grow: 1;
`;

const CommentBox = (props) => (
    <CommentWrapper top={props.x} left={props.y}>
        <h3>{props.title}</h3>
        <Desc>{props.description}</Desc>
        <PrimaryBtn>Edytuj</PrimaryBtn>
    </CommentWrapper>
)

export default CommentBox;