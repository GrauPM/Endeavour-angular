import { Component, OnInit } from '@angular/core';
import{ CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  private pageNumber = 0;

  constructor(private characters: CharactersService) {
  }
  
  ngOnInit() {
    //console.log(this.characters)
  }

  pickCharacter(position) {
    this.pageNumber = position.detail.value.split("-").pop();
  }
}
