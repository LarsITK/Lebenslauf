import { PropertyWrite } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

var hobbyArray = ["Schwimmen", "Klettern", "Programmieren", "Bildbearbeitung"];
var hobbys = "";
for (var i = 0; hobbyArray.length > i; i++) {
  var zusatz = "";
  if (i !== 0) {zusatz = ", "};
  hobbys += zusatz + hobbyArray[i];
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  name = this.data.getName();
  telefon = "+49 123 45678901";
  email = "jemand@example.com";
  adresse = {
    "strasse": "Musterstraße",
    "hausnummer": "123",
    "postleitzahl": "12345",
    "stadt": "Musterstadt"
  };
  geburt = {
    "tag": "01",
    "monat": "01",
    "jahr": "2000",
    "stadt": "Musterstadt"
  };
  foto = "../../assets/olaf.jpg";
  bildungsweg = [
    ["01/2020", "Abitur am Mustergymnasium Musterstadt [voraussichtlich]"],
    ["01/2010-01/2020", "Mustergymnasium Musterstadt"],
    ["01/2005-01/2010", "Grundschule Musterschule in Musterstadt"]
  ];
  erfahrung = [];
  sprachkenntnisse = [
    ["Deutsch", 0],
    ["Englisch", 2],
    ["Französisch", 3]
  ];
  computerkenntnisse = [
    ["Microsoft Word", 2],
    ["Microsoft PowerPoint", 2],
    ["Microsoft Excel", 3],    
    ["GIMP", 2],
    ["HTML", 2],
    ["JavaScript", 2],
    ["CSS", 2],
    ["Python", 2]
  ];
  sonstiges = [
    "DELF A1-Diplom (Französisch)",
    "DELF A2-Diplom (Französisch)"
  ];
  hobbys = hobbys;
  datum = Date();
  constructor(private data:DataService) { };

  ngOnInit(): void {
  };

};