import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pkmn';

  typeSelected = '';

  types$: AsyncSubject<string[]> = new AsyncSubject<string[]>();

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get('assets/types.json').subscribe((res: string[]) => {
      this.types$.next(res.sort());
      this.types$.complete();
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
