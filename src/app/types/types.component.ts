import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {
  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http.get('assets/funko.json').subscribe((res: Funko[]) => {
      // tslint:disable:curly
      const resTri = res.sort((a, b) => {
        if (a.category > b.category) return 1;
        if (a.category < b.category) return -1;

        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;

        return 0;
      });
      // tslint:enable:curly
      this.funkoList$.next(resTri);
      this.funkoList$.complete();
      this.funkoFilter = Array.from(resTri);
    });
  }
}
