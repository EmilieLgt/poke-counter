import { Injectable } from '@angular/core';
import { Pokemon } from '../models/PokemonModel';
@Injectable({
  providedIn: 'root',
})
export class CalculService {
  pokemons!: Pokemon[];

  constructor() {
    const savedPokemons = localStorage.getItem('pokemons');
    if (savedPokemons) {
      this.pokemons = JSON.parse(savedPokemons);
    }
  }

  setPokemons(pokemons: Pokemon[]) {
    this.pokemons = pokemons;
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('pokemons', JSON.stringify(this.pokemons));
  }

  getTotal(pokemon: Pokemon): number {
    return pokemon.numberCommon + pokemon.numberRare;
  }

  addCommon(id: number) {
    this.pokemons[id].numberCommon++;
    this.saveToLocalStorage();
  }
  addRare(id: number) {
    this.pokemons[id].numberRare++;
    this.saveToLocalStorage();
  }
  removeCommon(id: number) {
    this.pokemons[id].numberCommon--;
    this.saveToLocalStorage();
  }
  removeRare(id: number) {
    this.pokemons[id].numberRare--;
    this.saveToLocalStorage();
  }
}
