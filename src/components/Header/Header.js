import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/AluraFlix.png';
import homeButton from '../../assets/images/Home.png';
import novoVideoButton from '../../assets/images/NovoVideo.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="AluraFlix Logo" className="header-logo" />
      <nav>
        <Link to="/" className="nav-link">
          <img src={homeButton} alt="Home" className="nav-button" />
        </Link>
        <Link to="/novo-video" className="nav-link">
          <img src={novoVideoButton} alt="Novo Vídeo" className="nav-button" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
