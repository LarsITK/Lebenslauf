import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-eingabe',
  templateUrl: './eingabe.component.html',
  styleUrls: ['./eingabe.component.scss']
})
export class EingabeComponent implements OnInit {

  foto!: any;
  name!: string;
  telefon!: string;
  email!: string;

  imageError!: string;
  isImageSaved!: boolean;
  cardImageBase64!: string;

  constructor(private data:DataService) { }

  ngOnInit(): void {
  }

  updateFoto(event: any) {
    var fotoUrl: any
    const reader = new FileReader();
    reader.addEventListener("load", event => {fotoUrl = event.target?.result; this.data.setFoto(fotoUrl)})
    reader.readAsDataURL(event.target.files[0])
  }
  updateName() {
    this.data.setName(this.name)
  }
  updateTelefon() {
    this.data.setTelefon(this.telefon)
  }
  updateEmail() {
    this.data.setEmail(this.email)
  }
}

