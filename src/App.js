import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import BeerCard from "./BeerCard";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBeers = async () => {
      const response = await axios.get("https://api.punkapi.com/v2/beers");
      setBeers(response.data);
    };

    fetchBeers();
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search beers"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="beer-cards">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
