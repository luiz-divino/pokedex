export interface ListItemResponse {
    name: string;
    url: string;
}

export interface PokemonListResponse extends ListItemResponse {
  results: ListItemResponse[];
}

export interface PokemonDetailsResponse {  
  id: number;
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: { type: { name: string } }[];
  weight: number;
  height: number;
}
