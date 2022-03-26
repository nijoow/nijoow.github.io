import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | nijoow portfolio</title>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <meta
        name="description"
        content="신입 프론트엔드 개발자 이우진의 포트폴리오입니다."
      />
    </Head>
  );
}
