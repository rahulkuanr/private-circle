import { Component, Input, OnInit } from '@angular/core';
import staticData from '../data.json';

interface Data {
  date: String,
  listName: String,
  noOfEntities: Number,
  details: Array<String>
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  data: Data[] = staticData;
  detail: Array<String> = [];
  @Input() searchKeyword!: string;

  ngOnInit(): void {
  }

  getDetails(datum: Data) {
    this.detail = (datum.details);
  }

}
