import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {
  @Input()
  types: string[];

  @Output()
  typeSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  selectType(type: string) {
    this.typeSelected.emit(type);
  }
}
