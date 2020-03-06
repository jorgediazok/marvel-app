import React from 'react';
import SearchBar from './SearchBar';

function Header() {
  return (
    <div className="header-container">
      <a href="/">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/marvel-282124.png"
          alt="marvel logo"
          className="logo"
        />
      </a>

      <h3 className="header-title">Search Your Favourite Marvel Characters</h3>
      <h1 className="header-under-title">
        And click on their card to learn more about them!
      </h1>
    </div>
  );
}

export default Header;
