import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service'
import { SpellsService } from '../../services/spells.service'

@Component({
  selector: 'app-combat-interface',
  templateUrl: './combat-interface.component.html',
  styleUrls: ['./combat-interface.component.scss'],
})
export class CombatInterfaceComponent implements OnInit {

  constructor(private characters: CharactersService, private spells: SpellsService) { }

  ngOnInit() {
    console.log(this.characters)
  }

  getPlayerSpellList(position) {
    this.characters.players[position].spells.forEach(spell => {
      console.log(spell);
    });
  }
}
