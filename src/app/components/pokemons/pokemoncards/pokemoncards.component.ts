import { Component, inject } from '@angular/core';
import { PokemonApiService } from '../../../../services/pokemon-api.service';

@Component({
  selector: 'app-pokemoncards',
  standalone: true,
  imports: [],
  templateUrl: './pokemoncards.component.html',
  styleUrl: './pokemoncards.component.scss',
})
export class PokemoncardsComponent {
  private pokemonApiService = inject(PokemonApiService);

  allPokemons: any;

  ngOnInit() {
    this.pokemonApiService.getAllPokemons().subscribe((data) => {
      this.allPokemons = data.data;
    });
  }
  seeAllPokemons() {
    console.log(this.allPokemons);
  }
  
}
