import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-eingabe',
  templateUrl: './eingabe.component.html',
  styleUrls: ['./eingabe.component.scss']
})
export class EingabeComponent implements OnInit {

  name: string = "Max Mustermann";

  constructor(private data:DataService) { }

  ngOnInit(): void {
  }

  updateName() {
    this.data.setName(this.name)
  }

}
