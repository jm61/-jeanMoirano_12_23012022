import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import './index.css'
import App from './App'

import {createGlobalStyle} from 'styled-components'
import {ThemeProvider as StyleComponentThemeProvider} from 'styled-components'
import {theme} from '../src/utils/theme.js'

const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Roboto', sans-serif;
    }
`
const ThemeProvider = ({children, theme}) => {
  return (
    <StyleComponentThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </StyleComponentThemeProvider>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)

