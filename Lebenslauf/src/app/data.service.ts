import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  name!: string;
  constructor() {
    this.name = sessionStorage.getItem("name") || "";
  }
  getName() {return this.name;};
  setName(data: string) {this.name = data; sessionStorage.setItem("name", this.name);};
}
