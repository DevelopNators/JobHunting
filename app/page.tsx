"use client";
import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Links from "./components/links/links";
import HomePage from "./home/page";
import { GlobalStateProvider } from "./context/GLobalContext";
import Script from "next/script";

export default function Home() {
  let measurementId = "G-64SHT6GEGF";

  return (
    <main style={{ backgroundColor: "#F7F8F9" }}>
      <HomePage />

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}');
    `}
      </Script>
    </main>
  );
}
