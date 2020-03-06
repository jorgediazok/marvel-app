import React from 'react';
class SearchBar extends React.Component {
  render() {
    return (
      <div className="container">
        <a href="/">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/marvel-282124.png"
            alt="marvel logo"
            className="logo"
          />
        </a>

        <h2 className="heading">Live Search: Marvel Characters</h2>

        <div className="search">
          <label className="search-label" htmlFor="search-input">
            <input
              type="text"
              name="query"
              id="search-input"
              placeholder="Search Your Marvel Character"
              onChange={this.props.handleOnInputChange}
            />
            <i
              className="fa fa-search search-icon"
              aria-hidden="true"
              onClick={this.props.filterData}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
