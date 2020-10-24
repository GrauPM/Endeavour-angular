import { Component, OnInit } from '@angular/core';
import{ CharactersService } from '../../services/characters.service';
import { ItemsService } from '../../services/items.service'


@Component({
  selector: 'app-party-stats',
  templateUrl: './party-stats.page.html',
  styleUrls: ['./party-stats.page.scss'],
})
export class PartyStatsPage implements OnInit {

  private pageNumber = 0;

  constructor(private characters: CharactersService, private items: ItemsService) {
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
    this.characters.players[this.pageNumber].itemStats = this.items.returnItemStats(item.detail.value);
    //console.log(this.items.returnItemStats(item.detal.value))
    //this.characters.players[this.pageNumber].itemStats = this.items.equipItems(item.detail.value);
    //this.characters.getMySkills(this.characters.players[this.pageNumber].class,this.characters.players[this.pageNumber].level)
  }
}
