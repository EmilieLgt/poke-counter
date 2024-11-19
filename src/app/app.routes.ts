import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PokemonpageComponent } from './pages/pokemonpage/pokemonpage.component';
import { RecipespageComponent } from './pages/recipespage/recipespage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'pokemon', component: PokemonpageComponent },
  { path: 'recipe', component: RecipespageComponent },
];
