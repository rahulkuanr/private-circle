import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  constructor() { }

  searchText = '';
  @Output() eventItem = new EventEmitter<string>();

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.eventItem.emit(this.searchText);
  }

}
