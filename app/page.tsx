'use client'
import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./content";
import Links from "./components/links/links";

export default function Home() {
  const [shouldApplyStyle, setShouldApplyStyle] = useState(false);

  useEffect(() => {
    // Check window width on the client-side
    const checkWindowWidth = () => {
      setShouldApplyStyle(window.innerWidth > 520);
    };

    // Initial check
    checkWindowWidth();

    // Event listener for window resize
    window.addEventListener('resize', checkWindowWidth);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', checkWindowWidth);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <main  style={{backgroundColor:'#F7F8F9'}} >
      {/* Header */}
    

      {/* Content and Links */}
      <div style={{ display: "flex" }} className="link-content">
        {/* Content (80%) */}
        <div style={{ flex: "1", marginRight: shouldApplyStyle ? "20px" : 0 }} className="container">
          {/* Your content goes here */}
          <Content />
        </div>

        {/* Links (20%) */}
        {shouldApplyStyle ? (
          <div style={{ flex: "0 0 30%", maxWidth: "100%" }}>
            <Links />
          </div>
        ) : (
          <Links />
        )}
      </div>

      {/* Footer */}
     

      {/* Styles */}
      <style jsx>{`
        @media only screen and (max-width: 768px) {
          .link-content > div:first-child {
            margin-right: 0;
          }
        }
      `}</style>
    </main>
  );
}
