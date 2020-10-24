import { Component, Input, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service'
import { SpellsService } from '../../services/spells.service'

@Component({
  selector: 'app-combat-interface',
  templateUrl: './combat-interface.component.html',
  styleUrls: ['./combat-interface.component.scss'],
})
export class CombatInterfaceComponent implements OnInit {

  private currentCharacter;

  @Input() combatPriorityList: Array<any>;

  constructor(private characters: CharactersService, private spells: SpellsService) { }

  ngOnInit() {
    //console.log(this.characters)
    this.getCurrentCharacter()
    console.log(this.combatPriorityList)
  }

  getPlayerSpellList(position) {
    //this.characters.players[position].spells.forEach(spell => {
      //console.log(spell);
    //});
  }

  getCurrentCharacter() {
    this.currentCharacter = this.characters.players[0]
    //console.log("Current character: ")
    //console.log(this.currentCharacter)
  }
}
