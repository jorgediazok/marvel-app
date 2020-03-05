import React from 'react';
import SearchBar from './components/SearchBar';
import HeroeCard from './components/Card';
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
      'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=5f91b82fe57a936337f441738b95bad3&hash=00cd6e4d2acd4e6753d2a7837ce2c868';
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
    this.state.results.filter();
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <SearchBar data={data} />
        <HeroeCard data={data} />
      </div>
    );
  }
}

export default App;
