import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public photos = [];

  constructor() {
    this.photos = [
      {
        name: "Foto 1",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, quis?",
        url: "https://picsum.photos/id/949/600/400"
      },
      {
        name: "Foto 2",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, quis?",
        url: "https://picsum.photos/id/211/600/400"
      },
      {
        name: "Foto 3",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, quis?",
        url: "https://picsum.photos/id/393/600/400"
      },
      {
        name: "Foto 4",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, quis?",
        url: "https://picsum.photos/id/949/600/400"
      }
    ]
  }

}
