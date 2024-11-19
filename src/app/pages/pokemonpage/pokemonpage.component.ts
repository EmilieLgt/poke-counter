import { Component } from '@angular/core';
import { PokemonCounterComponent } from '../../components/pokemons/pokemon-counter/pokemon-counter.component';
import { PokemoncardsComponent } from '../../components/pokemons/pokemoncards/pokemoncards.component';

@Component({
  selector: 'app-pokemonpage',
  standalone: true,
  imports: [PokemonCounterComponent, PokemoncardsComponent],
  templateUrl: './pokemonpage.component.html',
  styleUrl: './pokemonpage.component.scss',
})
export class PokemonpageComponent {}
