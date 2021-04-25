import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
      ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }

  }

  render(){
    return (
      <Html lang="pt" >  
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="author: Apolinário Manuel"/>
          <meta name="robots" content="noindex"/>
          <meta name="AdsBot-Google" content="noindex"/>

          <link 
            rel="preconnect" 
            href="https://fonts.gstatic.com"
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" 
            rel="stylesheet"
          />

          <link 
            rel="icon"
            href="https://growthhackers.com/assets/favicon-8ae9c197ae35459a643e7f7ec89ffa95dc4acb383292a62557e9be3a4d1b94d6.ico"
          />

          <script src="https://code.iconify.design/1/1.0.6/iconify.min.js"/>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
