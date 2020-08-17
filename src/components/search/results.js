import React, {useState} from "react";
import {Link} from "react-router-dom";

const SearchResults = props => {
  const {pokedex, searchTerm} = props;
  const [links] = useState([
    {
      value: "Abilities",
      links: "#abilities",
    },
    {
      value: "Colors",
      links: "#color",
    },
    {
      value: "Gender",
      links: "#gender",
    },
    {
      value: "Location",
      links: "#location",
    },
    {
      value: "moves",
      links: "#moves",
    },
    {
      value: "types",
      links: "#types",
    },
    {
      value: "varieties",
      links: "#varieties",
    },
  ]);
  return (
    <>
      <div className="sc-title">
        <h5 className="findHeader">
          Results for <span className="findSearchTerm">"{searchTerm}"</span>
        </h5>
        <div id="findSubHeader">
          <span id="findSubHeaderLabel">Jump to:</span>
          {links.map((item, index) => (
            <React.Fragment key={index}>
              <a href={item.links}>{item.value}</a>
              {links.length - 1 !== index && <span className="ghost">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="search-content">
        <div className="search-card">
          <div className="search-img">
            <img src="images/pokemon.jpg" alt="" />
          </div>
          {pokedex.abilities && (
            <div id="abilities" className="sc-about">
              <h3>Abilities</h3>
              <p>
                {pokedex.abilities.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.ability.name}
                    {", "}
                  </React.Fragment>
                ))}
              </p>
            </div>
          )}
          {pokedex.color && (
            <div id="color" className="sc-about">
              <h3>color</h3>
              <p>{pokedex.color.name}</p>
            </div>
          )}
          {pokedex.genders && (
            <div id="gender" className="sc-about">
              <h3>Gender</h3>
              <p>{pokedex.genders}</p>
            </div>
          )}
          {pokedex.locations && (
            <div id="location" className="sc-about">
              <h3>Location</h3>
              <p>{pokedex.locations}</p>
            </div>
          )}
          {pokedex.moves && (
            <div id="moves" className="sc-about">
              <h3>Moves</h3>
              <p>
                {pokedex.moves.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.move.name}
                    {", "}
                  </React.Fragment>
                ))}
              </p>
            </div>
          )}
          {pokedex.types && (
            <div id="types" className="sc-about">
              <h3>Types</h3>
              <p>
                {pokedex.types.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.type.name}
                    {", "}
                  </React.Fragment>
                ))}
              </p>
            </div>
          )}
          {pokedex.varieties && (
            <div id="varieties" className="sc-about">
              <h3>Varieties</h3>
              <p>
                {pokedex.varieties.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.pokemon.name}
                    {", "}
                  </React.Fragment>
                ))}
              </p>
            </div>
          )}
          {pokedex.pokemonId && (
            <div id="chain" className="sc-about">
              <h3>Evolution Chain</h3>
              <Link
                to={`/evolution_chains/${pokedex.pokemonId}/true`}
                style={{color: "white", textDecoration: "underline"}}
              >
                Click Here
              </Link>
            </div>
          )}
          {pokedex.pokemonId && (
            <div id="trigger" className="sc-about">
              <h3>Evolution Trigger</h3>
              <Link
                to={`/evolution_triggers/${pokedex.pokemonId}`}
                style={{color: "white", textDecoration: "underline"}}
              >
                Click Here
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
