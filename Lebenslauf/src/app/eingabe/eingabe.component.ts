import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eingabe',
  templateUrl: './eingabe.component.html',
  styleUrls: ['./eingabe.component.scss']
})
export class EingabeComponent implements OnInit {

  name: string = "Max Mustermann";

  constructor() { }

  ngOnInit(): void {
  }

}
