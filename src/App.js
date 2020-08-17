import React from "react";
import {Provider} from "react-redux";
import {Switch, Route} from "react-router-dom";

import {store} from "./redux/store";
import Search from "./components/search";
import PokemonEvolution from "./components/evolution";
import Layout from "./components/Layout";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route path="/" component={Search} exact={true} />
          <Route
            path="/evolution_chains/:pokemonId/:isChain"
            component={PokemonEvolution}
          />
          <Route
            path="/evolution_triggers/:pokemonId"
            component={PokemonEvolution}
          />
        </Switch>
      </Layout>
    </Provider>
  );
}

export default App;
