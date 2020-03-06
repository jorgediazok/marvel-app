import React from 'react';

class HeroeCard extends React.Component {
  renderSearchResults = () => {
    if (this.props.data && this.props.data.length) {
      return (
        <div className="card-container">
          {this.props.data.map((character, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-body">
                  <h1>{character.name}</h1>
                  <a href={`${character.urls[1].url}`}>
                    <img
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                      alt="Heroe"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };
  render() {
    return this.renderSearchResults();
  }
}

export default HeroeCard;
