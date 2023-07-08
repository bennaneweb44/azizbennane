import React, { useEffect, useState } from 'react';
import CookieConsent from "react-cookie-consent";
import './App.css';
import Accueil from './pages/Accueil.js';
import Contact from './pages/Contact.js';
import FooterFirst from './pages/FooterFirst.js';
import FooterSecond from './pages/FooterSecond.js';
import Realisations from './pages/Realisations.js';
import Technologies from './pages/Technologies.js';
import UpArrow from './pages/UpArrow/UpArrow.js';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHideFrom = 1;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
      
    setIsVisible(false);
    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    }
  };

  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])

  return (  
    <div>
      <CookieConsent
        location="bottom"
        buttonText="J'ai compris !"
        cookieName="cookiesRGPD"
        style={{ background: "#2B373B" }}
        buttonStyle={{ background: "#E04848", color: "whitesmoke", fontSize: "13px", fontWeight: "bold" }}
        expires={150}
      >
        Ce site utilise des cookies.{" "}
        <span style={{ fontSize: "12px" }}>Pour améliorer l'expérience utilisateur, je partage les informations <u>non personnelles</u> avec des médias, réseaux sociaux ou autres sites succeptibles de solliciter <b>bennaneweb.fr</b></span>
      </CookieConsent>
      <Accueil></Accueil>
      <Technologies></Technologies>
      <Realisations></Realisations>
      <Contact></Contact>
      <FooterFirst></FooterFirst>
      { isVisible &&
        <UpArrow></UpArrow>
      }
      <FooterSecond></FooterSecond>
    </div>
  );
}

export default App;
