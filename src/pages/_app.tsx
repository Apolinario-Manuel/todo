import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { storeWrapper } from '../store'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default storeWrapper.withRedux(MyApp)
