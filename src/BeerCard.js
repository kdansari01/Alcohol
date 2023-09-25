import React from "react";

const BeerCard = ({ beer }) => {
  return (
    <div className="card">
      <img src={beer.image_url} alt={beer.name} />
      <div className="card-content">
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
      </div>
    </div>
  );
};

export default BeerCard;
