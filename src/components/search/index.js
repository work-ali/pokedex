import React, {useState} from "react";
import {connect} from "react-redux";

import TYPES from "../../redux/types";
import BodyContent from "../content";

const Search = props => {
  const {searchPokemon} = props;
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = e => {
    if (searchTerm.length > 3) {
      searchPokemon(searchTerm);
    }
  };

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <nav className="header-nav">
            <div className="search-modal">
              <div className="form-group">
                <label id="term-label" htmlFor="term" className="form-label">
                  <input
                    name="term"
                    id="term"
                    className=""
                    type="search"
                    aria-label="Search"
                    placeholder="Enter Pokemon Name"
                    title="Enter Pokemon Name"
                    onChange={handleChange}
                    required
                  />
                  <i className="fa fa-search" aria-hidden="true"></i>
                </label>
              </div>
              <input
                type="button"
                className="btn-search"
                value="Search"
                onClick={handleClick}
              />
            </div>
          </nav>
        </div>
      </header>
      <BodyContent />
    </>
  );
};

const mapStateToProps = state => ({
  searchResult: state.search.searchResult,
  isLoading: state.search.isLoading,
  searchHistory: state.search.history,
});

const mapDispatchToProps = dispatch => ({
  searchPokemon: data =>
    dispatch({type: TYPES.SEARCH.RESQUEST, searchTerm: data}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
