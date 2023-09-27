import { Injectable } from '@angular/core';
import { MarvelCharacter } from '../models/marvel-character.model';
import { environment } from 'config'; // Asegúrate de que esta importación sea correcta
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private apiUrl = 'https://gateway.marvel.com/v1/public/characters';
  private apiKey = environment.marvelApiKey;
  private hash = environment.marvelApiHash;

  constructor(private http: HttpClient) { } // Corregir aquí: private http: HttpClient

  getMarvelCharacters(page: number, pageSize: number = 20): Observable<MarvelCharacter[]> {
    const offset = (page - 1) * pageSize;
    const queryParams = `?ts=1000&apikey=${this.apiKey}&hash=${this.hash}&offset=${offset}&limit=${pageSize}`;
    const apiUrlWithParams = `${this.apiUrl}${queryParams}`;

    return this.http.get(apiUrlWithParams).pipe(
      map((response: any) => {
        if (response && response.data && response.data.results) {
          return response.data.results as MarvelCharacter[];
        } else {
          console.log('No se pudo cargar la información de los personajes de Marvel.');
          return [];
        }
      }),
      catchError(error => {
        console.error('Error al cargar los datos:', error);
        return throwError(() => error);
      })
    );
  }
}
