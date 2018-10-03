import { Weakness } from './../app.component';
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

  weaknesses: Weakness[];

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http.get('assets/types.json').subscribe((res: Weakness[]) => {
      this.weaknesses = res;
    });
  }
}
