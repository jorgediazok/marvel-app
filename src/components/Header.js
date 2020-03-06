import React from 'react';

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

      <h1 className="header-title">Search Your Favourite Marvel Characters</h1>
      <h3 className="header-under-title">
        And click on their card to learn more about them!
      </h3>
    </div>
  );
}

export default Header;
