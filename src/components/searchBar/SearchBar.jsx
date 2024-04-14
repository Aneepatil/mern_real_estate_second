import { useState } from "react";
import "./SearchBar.scss";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchTypeButton = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type, index) => (
          <button
            onClick={() => switchTypeButton(type)}
            key={index + 1}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
        {/* <button onClick={() => switchTypeButton("buy")}>Buy</button>
        <button onClick={() => switchTypeButton("rent")}>Rent</button> */}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="text"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Min Price"
        />
        <input
          type="text"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="Min Price"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
