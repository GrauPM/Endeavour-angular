import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service'

@Component({
  selector: 'app-combat',
  templateUrl: './combat.page.html',
  styleUrls: ['./combat.page.scss'],
})
export class CombatPage implements OnInit {

  constructor(private characters: CharactersService) { }

  ngOnInit() {
    console.log("Initializing combat!")
    this.getPlayerCombatants();
    //console.log(this.characters)
  }
  getPlayerCombatants() {
    console.log("Player combatants into the arena: ")
    let combatants = this.characters.players.slice(0,3)
    combatants.forEach((combatant,i) => {
      console.log("At position number " + i + ": " + combatant.name)
    });
  }
}
