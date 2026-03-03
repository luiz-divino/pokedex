import axios from "axios";
import type { PokemonDetailsResponse, PokemonListResponse } from "../interfaces/pokemonContract";

export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export const getPokemonList = async () => api.get<PokemonListResponse>('pokemon?limit=151');
export const getPokemonDetails = (name: string) => api.get<PokemonDetailsResponse>(`pokemon/${name}`);