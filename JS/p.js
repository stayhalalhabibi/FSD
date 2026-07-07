// POKEMON SEARCH APP

const searchBtn = document.getElementById("searchBtn");

const pokemonName = document.getElementById("pokemonName");

const result = document.getElementById("result");

const loading = document.getElementById("loading");

//SEARCH BUTTON CLICK

searchBtn.addEventListener("click", searchPokemon);

// ENTER KEY SEARCH

pokemonName.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchPokemon();
    }
});

async function searchPokemon(){

    const name = pokemonName.value.trim().toLowerCase();

    // EMPTY INPUT VALIDATION

    if(name===""){
    result.innerHTML="";
    loading.innerHTML="Please enter a Pokémon name or ID.";
    return;
}
    loading.innerHTML="Loading...";
    result.innerHTML="";

    try{

        const url=`https://pokeapi.co/api/v2/pokemon/${name}`;

        const response=await fetch(url);

        if(!response.ok){
            throw new Error("Pokémon not found");
        }

        const data = await response.json();

        // TYPES

        const types=data.types
          .map(type=>type.type.name)
          .join(", ");

        // ABILITIES

        const abilities=data.abilities
          .map(ability=>ability.ability.name)
          .join(", ");
    
        // STATS

        let statsHTML="";

        data.stats.forEach(stat=>{

        statsHTML+=`

        <p>

           <strong>${stat.stat.name}</strong>

            : ${stat.base_stat}

        </p>

    `;

    // DISPLAY POKEMON DETAILS

    result.innerHTML=`

   <h2>${data.name.toUpperCase()}</h2>

   <img src="${data.sprites.front_default}" alt="${data.name}"
   >

   <p><strong>ID:</strong> ${data.id}</p>

   <p><strong>Height:</strong> ${data.height}</p>

   <p><strong>Weight:</strong> ${data.weight}</p>

   <p><strong>Type:</strong> ${types}</p>

   <p><strong>Abilities:</strong> ${abilities}</p>

   <div class="stat">

      <h3>Stats</h3>

      ${statsHTML}

   </div>

  `;
   
  loading.innerHTML = "";

  result.innerHTML = `

     <p> class = "error">
         Pokemon not found.
     </p>

     `;
    }
}





