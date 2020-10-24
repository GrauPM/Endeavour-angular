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
    //this.characters.getMySkills(this.characters.players[this.pageNumber].class,this.characters.players[this.pageNumber].level)
    console.log()
  }
  equipNewItem(item) {
    this.characters.players[this.pageNumber].equippedItem = item.detail.value;
    //this.characters.getMySkills(this.characters.players[this.pageNumber].class,this.characters.players[this.pageNumber].level)
  }
}
