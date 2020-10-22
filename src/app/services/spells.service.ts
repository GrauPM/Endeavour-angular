import { Injectable, ɵɵi18nAttributes } from '@angular/core';
import { Spell } from '../classes/spell';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  spellList: Spell[] = [{
    class: 1,
    spells: {
      name: "Cleave",
      description: "Cleave everything",
      type: "physical",
      damage: 30,
      healing: 0,
      hitChance: 95,
      aura: "nothing"
    }
    //,
    //{
    //  name: "Hibernate",
    //  description: "Sleep to heal",
    //  type: "self",
    //  damage: 0,
    //  healing: 150,
    //  hitChance: 100,
    //  aura: 
    //}
  }]

  constructor() { }
  
  getClassSpells(classNumber) {
    return this.spellList[0];
  }
}