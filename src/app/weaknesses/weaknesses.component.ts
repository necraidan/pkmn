import { Weakness, PokemonType } from './../app.component';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncSubject } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'weaknesses',
  templateUrl: './weaknesses.component.html',
  styleUrls: ['./weaknesses.component.scss']
})
export class WeaknessesComponent implements OnInit {
  @Input()
  typeSelected: string;

  @Input()
  types$: AsyncSubject<string[]>;

  weaknesses: Object;

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this.types$.subscribe((types: string[]) => {
      this._http.get('assets/weaknesses.json').subscribe((res: PokemonType[]) => {
        this.weaknesses = {};
        res.forEach((pokemonType: PokemonType) => {
          if (!this.weaknesses[pokemonType.type]) {
            this.weaknesses[pokemonType.type] = pokemonType;
            this._diff(types, this.weaknesses[pokemonType.type].attack.map(elt => elt.type)).forEach(elt => {
              this.weaknesses[pokemonType.type].attack.push({ type: elt, takes: 1 });
            });

            this._diff(types, this.weaknesses[pokemonType.type].defense.map(elt => elt.type)).forEach(elt => {
              this.weaknesses[pokemonType.type].defense.push({ type: elt, takes: 1 });
            });

            this.weaknesses[pokemonType.type].attack = this.weaknesses[pokemonType.type].attack.sort(
              (a, b) => (a.type < b.type ? -1 : a.type > b.type ? 1 : 0)
            );
            this.weaknesses[pokemonType.type].defense = this.weaknesses[pokemonType.type].defense.sort(
              (a, b) => (a.type < b.type ? -1 : a.type > b.type ? 1 : 0)
            );
          }
        });

        console.log(this.weaknesses);
      });
    });
  }

  private _diff(source, target) {
    return source.filter(function(i) {
      return target.indexOf(i) === -1;
    });
  }
}
