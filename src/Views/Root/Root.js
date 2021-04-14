import { ThemeProvider } from 'styled-components'
import Theme from '../../globalStyle/Theme'
import GlobalStyle from '../../globalStyle/GlobalStyle'
import Workspace from 'src/Components/Organisms/Workspace/Workspace'
import LoginForm from 'src/Components/Organisms/LoginForm/LoginForm'
import RegisterForm from 'src/Components/Organisms/RegisterForm/RegisterForm'

function App() { 
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={Theme}>
          {/* <Workspace width="1280px" height="768px"/> */}
        <LoginForm />
        <RegisterForm />
      </ThemeProvider>
    </>
  );
}

export default App;
