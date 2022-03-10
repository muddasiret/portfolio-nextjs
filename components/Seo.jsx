import Head from "next/head";

const Seo = ({ pageName }) => {
  return (
    <Head>
      <title>Muddasir E{pageName && ` | ${pageName}`}</title>
      <meta name="description" content="Muddasir E | Frontend developer" />
      <meta property="og:type" content="website" />
      <meta name="robots" content="follow, index" />
      <meta property="og:url" content="https://muddasire.dev/" />
      <meta property="og:title" content="Muddasir E | Frontend developer" />
      <meta property="og:image" content="/meta-image.jpg" />
    </Head>
  );
};

export default Seo;
