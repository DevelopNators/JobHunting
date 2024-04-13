'use client'
import React, { useEffect, useState } from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";

import Links from "./components/links/links";

import HomePage from './home/page'
import { GlobalStateProvider } from './context/GLobalContext';

export default function Home() {
  
  return (
    <main  style={{backgroundColor:'#F7F8F9'}} >
      <GlobalStateProvider>
      <Header /> 
      <HomePage/>
      </GlobalStateProvider>
    </main>
  );
}
