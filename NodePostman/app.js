document.addEventListener('DOMContentLoaded', function() {
    const pokemonDataContainer = document.getElementById('pokemon-data');
  
    axios.get('https://pokeapi.co/api/v2/pokemon/1')
      .then(response => {
        const pokemon = response.data;
  
        // Crear el contenido HTML para mostrar los datos del Pokémon
        const html = `
          <div class="card">
            <div class="card-content">
              <span class="card-title">${pokemon.name}</span>
              <p>Height: ${pokemon.height}</p>
              <p>Weight: ${pokemon.weight}</p>
            </div>
          </div>
        `;
  
        pokemonDataContainer.innerHTML = html;
      })
      .catch(error => {
        console.error(error);
      });
  });
  