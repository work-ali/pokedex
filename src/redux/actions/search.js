export default async function getSearchedPokemon(searchTerm) {
  try {
    let response = fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
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

    const pokemonResponse = await response;
    const pokemonId = pokemonResponse.id;

    const pokemonIdentifications = await Promise.all([
      fetch(`https://pokeapi.co/api/v2/gender/${pokemonId}`).then(res =>
        res.json()
      ),
      fetch(`https://pokeapi.co/api/v2/location/${pokemonId}`).then(res =>
        res.json()
      ),
      fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
      ).then(res => res.json()),
    ]);

    return {
      payload: {
        pokemonId,
        abilities: pokemonResponse.abilities,
        color: pokemonIdentifications[2].color,
        genders: pokemonIdentifications[0].name,
        locations: pokemonIdentifications[1].name,
        moves: pokemonResponse.moves,
        types: pokemonResponse.types,
        varieties: pokemonIdentifications[2].varieties,
      },
    };
  } catch (error) {
    console.warn("error");
    return {
      payload: null,
    };
  }
}

// Promise.all([
//             fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`),
//             fetch(`https://pokeapi.co/api/v2/gender/${pokemonId}`)
//         ])
