import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: {},
      loading: false,
      message: ''
    };
  }

  handleOnInputChange = event => {
    const query = event.target.value;
    this.setState({ query: query, loading: true, message: '' });
  };

  handleMarvelApi = event => {
    const urlApi =
      'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=5f91b82fe57a936337f441738b95bad3&hash=00cd6e4d2acd4e6753d2a7837ce2c868';
    fetch(urlApi)
      .then(res => res.json)
      .then(json => console.log(json, 'res.json'));
  };

  render() {
    const { query } = this.state;
    return (
      <div className="container">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/marvel-282124.png"
          alt="marvel logo"
          className="logo"
        />
        <h2 className="heading">Live Search: Marvel Characters</h2>

        <div className="search">
          <label className="search-label" htmlFor="search-input">
            <input
              type="text"
              name="query"
              value={query}
              id="search-input"
              placeholder="Search Your Marvel Character"
              onChange={this.handleOnInputChange}
            />
            <i
              className="fa fa-search search-icon"
              aria-hidden="true"
              onClick={this.handleMarvelApi}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
