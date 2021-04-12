import { ThemeProvider } from 'styled-components';
import Theme from '../../globalStyle/Theme'
import GlobalStyle from '../../globalStyle/GlobalStyle';
// import CommentForm from 'src/Components/Organisms/CommentForm/CommentForm';
import Workspace from 'src/Components/Organisms/Workspace/Workspace';
function App() { 
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={Theme}>
          {/* <CommentForm /> */}
          <Workspace width="1280px" height="768px"/>
      </ThemeProvider>
    </>
  );
}

export default App;
