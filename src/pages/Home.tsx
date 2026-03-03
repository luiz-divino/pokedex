import { useEffect, useState } from "react";
import type { ListItemResponse } from "../interfaces/pokemonContract";
import { getPokemonList } from "../api/api";
import { PokemonCard } from "../components/PokemonCard";
import { CgPokemon } from 'react-icons/cg'; // Ícone que lembra uma pokébola

export const Home = () => {
    const [pokemons, setPokemons] = useState<ListItemResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const data = await getPokemonList();
        setPokemons(data);
      } catch (error) {
        console.error("Erro ao buscar pokémons:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CgPokemon className="text-red-600 text-6xl animate-spin" />
      </div>
    );
  }

    return (
    <div className="max-w-7xl mx-auto py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-red-600 mb-2">Seja bem vindo(a)!</h1>
        <h4 className="text-gray-600 text-lg font-bold">Explore o universo da pokedéx</h4>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
    )
}