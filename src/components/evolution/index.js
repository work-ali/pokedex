import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import TYPES from "../../redux/types";

const PokemonEvolution = props => {
  const {
    getPokemonEvolution,
    evolutionChainSpecies,
    getPokemonEvolutionTrigger,
    evolutionChainTrigger,
  } = props;
  const {pokemonId, isChain} = props.match.params;

  useEffect(() => {
    if (isChain) {
      getPokemonEvolution(pokemonId);
    } else {
      getPokemonEvolutionTrigger(pokemonId);
    }
  }, []);

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="header-nav">
            <div className="search-modal" style={{justifyContent: "right"}}>
              <Link to="/" className="btn-prev">
                Back
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <div className="content">
        <div className="search-content-wrap">
          <div className="search-content">
            <div className="search-card">
              <h2 style={{paddingBottom: "20px", color: "white"}}>
                {isChain ? "Evolution Chain" : "Evolution Trigger"}
              </h2>
              {isChain && (
                <div className="sc-about">
                  <p>
                    <span>Specie Name: </span>
                    {evolutionChainSpecies.chain.name}
                  </p>
                </div>
              )}
              {!isChain && (
                <div className="sc-about">
                  {evolutionChainTrigger.trigger && (
                    <p>
                      <span>Trigger Name: </span>
                      {evolutionChainTrigger.trigger}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  evolutionChainTrigger: state.pokemonEvolutionTrigger,
  evolutionChainSpecies: state.pokemonEvolution,
  isLoading: state.pokemonEvolution.isLoading,
});

const mapDispatchToProps = dispatch => ({
  getPokemonEvolution: data =>
    dispatch({type: TYPES.EVOLUTION.RESQUEST, pokemonId: data}),
  getPokemonEvolutionTrigger: data =>
    dispatch({type: TYPES.TRIGGER.RESQUEST, pokemonId: data}),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonEvolution);
