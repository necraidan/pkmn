import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pkmn';

  typeSelected = '';

  setTypeSelected(type) {
    this.typeSelected = type;
  }
}

export interface PokemonType {
  type: string;
  attack: Weakness[];
  defense: Weakness[];
}

export interface Weakness {
  type: string;
  take: number;
}
