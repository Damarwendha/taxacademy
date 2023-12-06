import Head from "next/head";

function Helmet({ str }) {
  return (
    <Head>
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
      <title>Taxacademy | {str}</title>
    </Head>
  );
}

export default Helmet;
