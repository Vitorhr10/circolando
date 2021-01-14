import Document, { DocumentProps, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <title>Instituto Agronelli - Circolando</title>
          <meta charSet="utf-8" />
          <meta name="language" content="pt-BR" />
          <meta name="description" content="Instituto Agronelli comemora 20 anos de fundação convidamos o palhaço Malinha para conversar e colorir com as crianças em dois encontros muito legais!" />
          <meta name="robots" content="index" />
          <meta name="keywords" content="Instituto Agronelli, Circolando, Iniciativas Artísticas, Dia das Crianças, Malinha," />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap" rel="stylesheet" />
          <meta name="google-site-verification" content="nJLbeC_Bx_EzctAjUNU5DZfMKXUTIeNvsdkvGxrAIqE" />
          <meta name="author" content="Vitor Rodrigues" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;