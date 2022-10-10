import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      // Run the React rendering logic synchronously
      ctx.renderPage = () =>
        originalRenderPage({
          // Useful for wrapping the whole react tree
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
          // Useful for wrapping in a per-page basis
          // 이 예제에서는 불필요한 라인인데 설명을 위해 넣음
          enhanceComponent: (Component) => Component,
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

  // 이하 render 부분은 필수는 아닌데
  // 추후 커스텀을 할 수 있어서 넣어준다
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            as="style"
            crossOrigin="anonymous"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/variable/pretendardvariable.css"
          />
        </Head>
        <body>
          <Main />
          <div id="toast" />
          <div id="dialog" />
          <NextScript />
        </body>
      </Html>
    )
  }
}
