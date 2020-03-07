import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search">
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            name="query"
            autoFocus
            id="search-input"
            onChange={this.props.handleOnInputChange}
            onKeyPress={this.props.handleKeyPress}
          />
          <i
            className="fa fa-search search-icon"
            aria-hidden="true"
            onClick={this.props.filterData}
          />
        </label>
      </div>
    );
  }
}

export default SearchBar;
