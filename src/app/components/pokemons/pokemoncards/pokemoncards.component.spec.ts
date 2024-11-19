import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemoncardsComponent } from './pokemoncards.component';

describe('PokemoncardsComponent', () => {
  let component: PokemoncardsComponent;
  let fixture: ComponentFixture<PokemoncardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemoncardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemoncardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
