import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pkmn';

  typeSelected = '';

  types: string[] = [];

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get('assets/types.json').subscribe((res: string[]) => {
      this.types = res;
    });
  }

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
