import React from 'react';

class HeroeCard extends React.Component {
  renderSearchResults = () => {
    if (this.props.data && this.props.data.length) {
      return (
        <div className="card-container" id="card-container-id">
          {this.props.data.map((character, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-body">
                  <h1>{character.name}</h1>
                  <a href={`${character.urls[1].url}`}>
                    <img
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                      alt="Marvel-Character"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <h1 className="no-match">
          No matches found. Please make another request!
        </h1>
      );
    }
  };

  render() {
    return this.renderSearchResults();
  }
}

export default HeroeCard;
