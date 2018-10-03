import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {
  types: string[];

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http.get('assets/types.json').subscribe((res: string[]) => {
      this.types = res;
    });
  }
}
