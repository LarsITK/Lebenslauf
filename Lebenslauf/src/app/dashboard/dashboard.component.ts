import { PropertyWrite } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

var bildungswegfunktion = function (input: string[][]) {
  var bildungswegtabelle = "<table>"
  for (var i = 0; i < input.length; i++) {
    bildungswegtabelle += "<tr><td>" + input[i][0] + "</td><td>" + input[i][1] + "</td></tr>"
  }
  bildungswegtabelle += "</table>"
  return bildungswegtabelle
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  name = "Max Mustermann"
  telefon = "+49 123 45678901"
  email = "jemand@example.com"
  adresse = {
    "strasse": "Musterstraße",
    "hausnummer": "123",
    "postleitzahl": "12345",
    "stadt": "Musterstadt"
  }
  geburt = {
    "tag": "01",
    "monat": "01",
    "jahr": "2000",
    "stadt": "Musterstadt"
  }
  foto = "../../assets/olaf.jpg"
  bildungsweg = [
    ["01/2020", "Abitur am Mustergymnasium Musterstadt [voraussichtlich]"],
    ["01/2010-01/2020", "Mustergymnasium Musterstadt"],
    ["01/2005-01/2010", "Grundschule Musterschule in Musterstadt"]
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

