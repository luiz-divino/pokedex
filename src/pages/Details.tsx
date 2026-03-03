import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { PokemonDetailsResponse } from "../interfaces/pokemonContract";
import { getPokemonDetails } from "../api/api";
import { CgPokemon } from 'react-icons/cg';

export const Details = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemon, setPokemon] = useState<PokemonDetailsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      if (!name) return;
      try {
        setLoading(true);
        const data = await getPokemonDetails(name);
        setPokemon(data);
      } catch (error) {
        console.error("Erro ao carregar detalhes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemonDetails();
  }, [name]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><CgPokemon className="text-red-600 text-6xl animate-spin" /></div>;
  }

  if (!pokemon) {
    return <div className="text-center py-10 text-red-600 font-bold">ERRO! Pokémon não encontrado</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mt-10 border-t-8 border-red-600">
      <Link to="/" className="inline-block m-6 text-red-600 font-bold hover:underline">
        ← Voltar
      </Link>
      
      <div className="flex flex-col items-center p-8">
        <h1 className="text-4xl font-black capitalize text-gray-800 mb-4">{pokemon.name}</h1>
        
        <div className="bg-gray-100 rounded-full p-6 mb-6">
          <img 
            src={pokemon.sprites.other['official-artwork'].front_default} 
            alt={pokemon.name}
            className="w-64 h-64 object-contain"
          />
        </div>

        <div className="flex gap-2 mb-8">
          {pokemon.types.map((t) => (
            <span key={t.type.name} className="px-6 py-2 bg-red-100 text-red-700 rounded-full font-bold capitalize">
              {t.type.name}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 w-full border-t pt-8 text-center">
          <div>
            <p className="text-gray-400 text-sm uppercase font-bold">Peso</p>
            <p className="text-2xl font-bold text-gray-800">{pokemon.weight / 10} kg</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm uppercase font-bold">Altura</p>
            <p className="text-2xl font-bold text-gray-800">{pokemon.height / 10} m</p>
          </div>
        </div>
      </div>
    </div>
  );
};
