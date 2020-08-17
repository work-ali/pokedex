import React from "react";
import {connect} from "react-redux";
import SearchResults from "../search/results";
import History from "../search/history";

const BodyContent = props => {
  const {searchResult, searchHistory, searchTerm} = props;
  return (
    (searchResult || (searchHistory && searchHistory.length > 0)) && (
      <div className="content">
        <div className="search-content-wrap">
          {searchResult &&
            (searchResult === "NoResult" ? (
              <div className="search-content">
                <div className="search-card">
                  <h5>Result Not Found</h5>
                </div>
              </div>
            ) : (
              <SearchResults
                pokedex={searchResult}
                history={searchHistory}
                searchTerm={searchTerm}
              />
            ))}
          {searchHistory && searchHistory.length > 0 && (
            <History data={searchHistory} />
          )}
        </div>
      </div>
    )
  );
};

const mapStateToProps = state => ({
  searchTerm: state.search.searchTerm,
  searchResult: state.search.searchResult,
  isLoading: state.search.isLoading,
  searchHistory: state.search.history,
});

export default connect(mapStateToProps, null)(BodyContent);
