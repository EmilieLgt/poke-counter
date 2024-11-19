import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  constructor() {}

  private http = inject(HttpClient);
  getAllPokemons(): Observable<any> {
    return this.http.get(
      'https://api.pokemontcg.io/v2/cards?orderBy=name,-number'
    );
  }
}
