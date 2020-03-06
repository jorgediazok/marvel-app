import React from 'react';
import SearchBar from './components/SearchBar';
import HeroeCard from './components/Card';
import Header from './components/Header';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: [],
      loading: false,
      message: ''
    };
  }

  componentDidMount() {
    const urlApi =
      'https://gateway.marvel.com:443/v1/public/characters?&apikey=5f91b82fe57a936337f441738b95bad3&hash=00cd6e4d2acd4e6753d2a7837ce2c868&limit=100&offset=0';
    fetch(urlApi)
      .then(res => res.json())
      .then(data =>
        this.setState(currentState => ({
          ...currentState,
          data: data.data.results
        }))
      );
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleOnInputChange = event => {
    const query = event.target.value;
    this.setState({ query: query, loading: true, message: '' });
  };

  handleKeyPress = event => {
    if (event.charCode === 13) {
      this.filterData();
    }
  };

  filterData = () => {
    const query = this.state.query;
    const data = this.state.data;
    const urlApi = `https://gateway.marvel.com:443/v1/public/characters?name=${query}&apikey=5f91b82fe57a936337f441738b95bad3&hash=00cd6e4d2acd4e6753d2a7837ce2c868`;
    if (query === '') {
      return;
    } else if (data === []) {
      return <p>{this.handleText()}</p>;
    } else {
      fetch(urlApi)
        .then(res => res.json())
        .then(data =>
          this.setState(currentState => ({
            ...currentState,
            data: data.data.results
          }))
        );
    }
  };

  handleText = () => {
    return <p>No Matching Found</p>;
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Header />
        <SearchBar
          handleOnInputChange={this.handleOnInputChange}
          filterData={this.filterData}
          handleKeyPress={this.handleKeyPress}
        />
        <HeroeCard data={data} />
      </div>
    );
  }
}

export default App;

/*        <p className="no-found">{this.handleText()}</p>
 */
