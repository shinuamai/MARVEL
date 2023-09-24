import { Injectable } from '@angular/core';
import { MarvelCharacter } from '../models/marvel-character.model';
import { environment } from 'config';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private apiUrl = 'https://gateway.marvel.com/v1/public/characters';
  private apiKey = environment.marvelApiKey;
  private hash = environment.marvelApiHash;

  constructor() { }

   async getMarvelCharacters(page: number, pageSize: number = 20): Promise<MarvelCharacter[]> {
    const offset = (page - 1) * pageSize;
    const queryParams = `?ts=1000&apikey=${this.apiKey}&hash=${this.hash}&offset=${offset}&limit=${pageSize}`;
    const apiUrlWithParams = `${this.apiUrl}${queryParams}`
    try {
      const response = await fetch(apiUrlWithParams);
      const data = await response.json();

      if (data && data.data && data.data.results) {
        const characters: MarvelCharacter[] = data.data.results;
        return characters;
      } else {
        console.error('No se pudo cargar la información de los personajes de Marvel.');
        return [];
      }
    } catch (error) {
      console.error('Error al cargar los datos:', error);
      throw error;
    }
  }
}

