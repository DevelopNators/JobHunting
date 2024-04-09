import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jog Hunting",
  description: "job huting for Freshers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} /> */}
        {/* Add any other necessary meta tags or links here */}
      </head>
      <body className={inter.className}>
        <Header /> {/* Add the Header component */}
        <main>{children}</main>
        <Footer /> {/* Add the Footer component */}
      </body>
    </html>
  );
}
