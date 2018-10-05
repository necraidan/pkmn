import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {
  types: string[];

  @Input()
  types$: AsyncSubject<string[]>;

  @Output()
  typeSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    this.types$.subscribe(types => (this.types = types));
  }

  selectType(type: string) {
    this.typeSelected.emit(type);
  }
}
