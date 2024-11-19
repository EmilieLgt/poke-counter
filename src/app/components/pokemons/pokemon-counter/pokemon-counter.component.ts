import { Component } from '@angular/core';
import { Pokemon } from '../../../../models/PokemonModel';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-counter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pokemon-counter.component.html',
  styleUrl: './pokemon-counter.component.scss',
})
export class PokemonCounterComponent {
  title = 'Counter';
  pokemons: Pokemon[] = [
    {
      id: 0,
      image: 'https://avatarfiles.alphacoders.com/374/374376.png',
      name: 'Dracaufeu',
      numberCommon: 0,
      numberRare: 0,
    },
    {
      id: 1,
      image:
        'https://i.pinimg.com/originals/66/19/07/66190777ab8c5e87596b5f99ecedfbd6.jpg',
      name: 'Pikachu',
      numberCommon: 0,
      numberRare: 0,
    },
    {
      id: 2,
      image: 'https://i.ebayimg.com/images/g/mUcAAOSwlotjZzR3/s-l1200.jpg',
      name: 'Mewtwo',
      numberCommon: 0,
      numberRare: 0,
    },
  ];

  ngOnInit() {
    const savedPokemonsCount = localStorage.getItem('pokemons');
    if (savedPokemonsCount) {
      this.pokemons = JSON.parse(savedPokemonsCount);
    }
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
