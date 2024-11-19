import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-recipes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './api-recipes.component.html',
  styleUrl: './api-recipes.component.scss',
})
export class ApiRecipesComponent {
  recipesData: any;
  recipes: any;
  http = inject(HttpClient);

  mealChosen: string = '';
  healthChoice: string = '';

  callRecipe() {
    console.log(this.healthChoice);
    this.http
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=&app_key=&health=gluten-free${this.healthChoice}&mealType=${this.mealChosen}&random=true`
      )
      .subscribe((data) => {
        this.recipesData = data;
        this.recipes = this.recipesData.hits;
        console.log(this.recipes);
      });
  }
}
