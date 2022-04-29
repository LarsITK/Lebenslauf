import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  name!: string;
  telefon!: string;
  email!: string;
  foto!: any;
  constructor() {
    this.name = sessionStorage.getItem("name") || "";
    this.telefon = sessionStorage.getItem("telefon") || "";
    this.email = sessionStorage.getItem("email") || "";
    this.foto = sessionStorage.getItem("email") || "";
  }
  getName() {return this.name;};
  setName(data: string) {this.name = data; sessionStorage.setItem("name", this.name);};
  getTelefon() {return this.telefon;};
  setTelefon(data: string) {this.telefon = data; sessionStorage.setItem("telefon", this.telefon);};
  getEmail() {return this.email;};
  setEmail(data: string) {this.email = data; sessionStorage.setItem("email", this.email);};
  getFoto() {return this.foto;};
  setFoto(data: any) {this.foto = data; sessionStorage.setItem("foto", this.foto);};
}
