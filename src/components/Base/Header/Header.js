import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
        <a href="/">
            <img src={require('assets/logo.png').default} className="Logo" alt="logo" />
        </a>        
        <CSSTransition
            in={!isSmallScreen || isNavVisible}
            timeout={350}
            classNames="NavAnimation"
            unmountOnExit
        >
            <nav className="Nav">
            <a href="/">Karma</a>
            <a href="/auth">Happiness</a>
            <a href="/">Relationship</a>
            <a href="/">Living Life</a>
            <a href="/">Death</a>
            <button>About</button>
            </nav>
        </CSSTransition>
        <button onClick={toggleNav} className="Burger">
            <img src={require('assets/menu-btn.png').default} className="Menubtn" alt="menubtn" height={50} width={50}/>
        </button>
    </header>
  );
}
