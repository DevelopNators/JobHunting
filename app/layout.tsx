import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { GlobalStateProvider } from './context/GLobalContext';
import HomePage from "./home/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Huntings",
  description: "Stay ahead in your job hunt with our daily updates on the latest job openings, training opportunities, and internships. We provide timely information to help you navigate the dynamic landscape of career opportunities.",
  icons:"../public/favicon.ico",
  applicationName:"Job Huntings"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      

      </head>
       
      <body className={inter.className}>
      <GlobalStateProvider>
        <Header  /> 
        </GlobalStateProvider>

        <main  style={{backgroundColor:'#F7F8F9'}}>{children}</main>
        <Footer  /> 
      </body>
    </html>
  );
}
