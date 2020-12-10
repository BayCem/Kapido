import React from 'react';
import RoundedButton from '../blueButtonComponent/Button';

import Logo from '../logoComponent/Logo';

import '../../assets/css/header.min.css';

const header = () => (
  <header className="Header">
    <a className="header-logo" href="#">
      <Logo />
    </a>
    <nav className="Header-menu">
      <ul className="Header-menu__items">
        <li>
          <a href="#">Satış Partneri Ol</a>
        </li>
        <li>
          <a href="#">Kapidoo Nasıl Çalışır</a>
        </li>
        <li>
          <a href="#">Giriş Yap</a>
        </li>
      </ul>
    </nav>
    <a className="cta" href="#">
      <RoundedButton label="Üye Ol" className="blue-button" />
    </a>
  </header>
);

export default header;
