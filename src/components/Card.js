import React, { Component } from 'react';

class HeroeCard extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <>
        {data.map((character, index) => {
          return (
            <div className="container2" key={index}>
              <div className="card-body">
                <h1>{character.name}</h1>
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt="Heroe"
                />
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default HeroeCard;
