import { Weakness, PokemonType } from './../app.component';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'weaknesses',
  templateUrl: './weaknesses.component.html',
  styleUrls: ['./weaknesses.component.scss']
})
export class WeaknessesComponent implements OnInit {
  @Input()
  typeSelected: string;

  weaknesses: Object;

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http.get('assets/weaknesses.json').subscribe((res: PokemonType[]) => {
      this.weaknesses = {};
      res.forEach((pokemonType: PokemonType) => {
        if (!this.weaknesses[pokemonType.type]) {
          this.weaknesses[pokemonType.type] = pokemonType;
        }
      });

      console.log(this.weaknesses);
    });
  }
}
