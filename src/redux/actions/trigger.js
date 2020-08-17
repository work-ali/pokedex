export default async function getPokemonEvolutionTrigger(pokemonId) {
  try {
    let response = fetch(
      `https://pokeapi.co/api/v2/evolution-trigger/${pokemonId}`
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
      payload: res.name,
    };
  } catch (error) {
    console.warn("error");
    return {
      payload: null,
    };
  }
}
