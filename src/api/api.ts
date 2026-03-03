import axios from "axios";
import type { PokemonDetailsResponse, PokemonListResponse } from "../interfaces/pokemonContract";

export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export const getPokemonList = async () =>{
    const responseList = await api.get<PokemonListResponse>('pokemon?limit=151');  
    return responseList.data.results;
}
export const getPokemonDetails = async (name: string) => {
    const responsePokemon = await api.get<PokemonDetailsResponse>(`pokemon/${name}`);
    console.log(responsePokemon.data);
    return responsePokemon.data;
}