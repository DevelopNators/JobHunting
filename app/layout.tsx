import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { GlobalStateProvider } from './context/GLobalContext';
import HomePage from "./home/page";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });
let measurementId ='G-64SHT6GEGF'
export const metadata: Metadata = {
  title: 'Job Huntings | Your Job Hunting Platform', 
  description: "Stay ahead in your job hunt with our daily updates on the latest job openings, training opportunities, and internships. We provide timely information to help you navigate the dynamic landscape of career opportunities.",
  icons: "../public/favicon.ico",
  applicationName: "Job Huntings",
  keywords: ['job hunting, job search, jobs, careers, employment, openings, vacancies, internships, apprenticeships, training, professional development, career advice, career planning, resume writing, interview tips, job applications, cover letters, salary negotiation, networking, job boards, employer branding, talent acquisition'], 
  openGraph: {
    title: 'Job Huntings | Find Your Dream Job', 
    description: 'Your one-stop shop for job hunting resources.',
    url: 'https://jobhuntings.developnators.com/',
    images: [ 
      {
        url: 'https://jobhuntings.developnators.com/', 
        width: 800,
        height: 600, 
      },
    ],
    siteName: 'Job Huntings', 
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jobhuntings', 
  },
 
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
     
      </head>
       
      <GlobalStateProvider>
      <body className={inter.className}>
     
        <Header  /> 
        <main  style={{backgroundColor:'#F7F8F9'}}>{children}</main>
        <Footer  /> 
      </body>
      </GlobalStateProvider>
      <Script   strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}></Script>
      <Script id="google-analytics" strategy="afterInteractive">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}');
    `}
</Script>
    </html>
  );
}
