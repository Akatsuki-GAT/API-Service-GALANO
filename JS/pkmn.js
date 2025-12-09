async function fetchData() {
  try {
    const pkmn_name = document.getElementById("pkmn_name").value.toLowerCase();
    if (!pkmn_name) {
      alert("Please enter a Pokémon name!");
      return;
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn_name}`);
    if (!response.ok) throw new Error("Pokémon not found");

    const data = await response.json();
    console.log(data); // Inspect data in console

    // --- Show sprite ---
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = `https://play.pokemonshowdown.com/sprites/ani/${pkmn_name}.gif`; //pokeapi imgs is unavailable
    //imgElement.src = data.sprites.front_default;
    imgElement.style.display = "block";

    // --- Convert and show info ---
    const toUpper = (str) => str.toUpperCase();

    document.getElementById("pokeName").textContent = toUpper(data.name); //name of pkmn
    document.getElementById("pokeID").textContent = data.id; //id of pkhmn
    document.getElementById("pokeType").textContent = data.types //type pkmn
      .map(t => toUpper(t.type.name))
      .join(", ");
    document.getElementById("pokeHeight").textContent = data.height; 
    document.getElementById("pokeWeight").textContent = data.weight;
    document.getElementById("pokeAbilities").textContent = data.abilities //pkmn passive
      .map(a => toUpper(a.ability.name))
      .join(", ");

    // --- Show info block ---
    document.getElementById("pokemonInfo").style.display = "block";
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    alert("Pokémon not found! Try again.");
  }
}
