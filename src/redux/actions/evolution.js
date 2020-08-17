export default async function getPokemonEvolution(pokemonId) {
  try {
    let response = fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${pokemonId}`
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("not found");
        }
      })
      .catch(error => {
        console.log(error);
      });
    const res = await response;

    return {
      payload: res.chain.species,
    };
  } catch (error) {
    console.warn("error");
    return {
      payload: null,
    };
  }
}
