import Head from "next/head";
import React from "react";

interface seoIn{
  title:string, 
  description:string

}

const Seo :React.FC<seoIn> = ({ title , description }) => {

  console.log("ADS")
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="keywords" content="job hunting, job search, jobs, careers, employment, naukri, indeed, monster, job posting, resume building, career advice" />
      {typeof window !== 'undefined' && (
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2030818425983269`}
          crossOrigin="anonymous"
        />
      )}
    </Head>
  );
};

export default Seo;

