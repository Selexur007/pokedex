const button = document.querySelector('button');
const pokemonContainer = document.querySelector('.pokemon-container');


button.addEventListener('click', (e) =>{
   e.preventDefault();
  
      obtenerPokemon();
});

function obtenerPokemon(){
   let id = Math.round(Math.random() * 150);
   const url=`https://pokeapi.co/api/v2/pokemon/`+id;
   fetch(url).then(response => response.json())
   .then(data => crearPokemon(data));
   limpiarHTML();
}

function limpiarHTML(){
   while(pokemonContainer.firstChild){
      pokemonContainer.removeChild(pokemonContainer.firstChild);
   }
}
function crearPokemon(pokemon){
   const img = document.createElement('img');
   img.src = pokemon.sprites.front_default; 


   const nombre = document.createElement('p');
   nombre.textContent = 'Nombre: ';

   const h3 = document.createElement('h3');
   h3.textContent = pokemon.name;
 
   const experience = document.createElement('p');
   experience.textContent = 'Experiencia: ';

   const h2 = document.createElement('h2');
   h2.textContent = pokemon.base_experience;

   const orden_name = document.createElement('p');
   orden_name.textContent = 'Orden: ';

   const orden = document.createElement('h2');
   orden.textContent = pokemon.order;

   const div = document.createElement('div');

   div.appendChild(img);
   div.appendChild(nombre);
   div.appendChild(h3);
   div.appendChild(experience);
   div.appendChild(h2);
   div.appendChild(orden_name);
   div.appendChild(orden);

   pokemonContainer.appendChild(div);
}
   obtenerPokemon();
