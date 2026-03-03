
import { Link } from 'react-router-dom';
import type { ListItemResponse } from '../interfaces/pokemonContract';

interface Props {
  pokemon: ListItemResponse;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const pokemonId = pokemon.url.split('/').filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

  return (
    <Link 
      to={`/pokemon/${pokemon.name}`} 
      className="group bg-white border-gray-500 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center border-2 border-transparent hover:border-red-500"
    >
      
      <div className="bg-gray-100 rounded-full p-2 mb-4 w-32 h-32 flex items-center justify-center overflow-hidden">
        <img 
          src={imageUrl} 
          alt={pokemon.name} 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          loading="lazy" 
        />
      </div>

      <span className="text-sm font-bold text-gray-400 items-center">
        #{pokemonId?.padStart(3, '0')}
      </span>

      {}
      <h2 className="text-2xl font-extrabold capitalize text-gray-800 group-hover:text-red-600 transition-colors">
        {pokemon.name}
      </h2>

      {}
      <div className="mt-4 bg-red-600 text-white text-sm px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Ver Detalhes
      </div>
    </Link>
  );
};