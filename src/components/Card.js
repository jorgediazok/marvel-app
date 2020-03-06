import React, { Component } from 'react';

class HeroeCard extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div className="card-container">
        {data.map((character, index) => {
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
}

export default HeroeCard;
