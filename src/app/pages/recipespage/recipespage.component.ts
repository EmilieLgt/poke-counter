import { Component } from '@angular/core';
import { ApiRecipesComponent } from "../../components/recipes/api-recipes/api-recipes.component";

@Component({
  selector: 'app-recipespage',
  standalone: true,
  imports: [ApiRecipesComponent],
  templateUrl: './recipespage.component.html',
  styleUrl: './recipespage.component.scss'
})
export class RecipespageComponent {

}
