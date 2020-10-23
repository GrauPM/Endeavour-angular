import { Injectable, ɵɵi18nAttributes } from '@angular/core';
import { Spell } from '../classes/spell';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  defaultSpells = [{
    level: 1,
    name: "Attack",
    description: "A normal attack",
    type: "physical",
    damage: 30,
    healing: 0,
    hitChance: 95,
    aura: undefined
  }]
  knightSpells = [{
    level: 1,
    name: "Cleave",
    description: "A cleave",
    type: "physical",
    damage: 30,
    healing: 0,
    hitChance: 95,
    aura: undefined
  },{
    level: 1,
    name: "Hibernate",
    description: "Zzz",
    type: "magic",
    damage: 0,
    healing: 200,
    hitChance: 100,
    aura: undefined
  }]
  druidSpells = [{
    level: 1,
    name: "Regrowth",
    description: "Regrowth",
    type: "nature",
    damage: 0,
    healing: 30,
    hitChance: 100,
    aura: undefined
  }]
  rogueSpells = [{
    level: 1,
    name: "Backstab",
    description: "A backstab",
    type: "physical",
    damage: 70,
    healing: 0,
    hitChance: 95,
    aura: undefined
  }]
  warlockSpells = [{
    level: 1,
    name: "Corruption",
    description: "Corruption",
    type: "curse",
    damage: 30,
    healing: 0,
    hitChance: 95,
    aura: undefined
  }]
  mageSpells = [{
    level: 1,
    name: "Fireball",
    description: "A fireball",
    type: "physical",
    damage: 30,
    healing: 0,
    hitChance: 95,
    aura: undefined
  }]
  shamanSpells = [{
    level: 1,
    name: "Water wave",
    description: "A heal",
    type: "magic",
    damage: 0,
    healing: 100,
    hitChance: 100,
    aura: undefined
  }]

  constructor() { }

  loadSpells(classNumber,level) {
    switch (classNumber) {
      case 1: return this.knightSpells.concat(this.defaultSpells);
      case 2: return this.druidSpells.concat(this.defaultSpells);
      case 3: return this.rogueSpells.concat(this.defaultSpells);
      case 4: return this.warlockSpells.concat(this.defaultSpells);
      case 5: return this.mageSpells.concat(this.defaultSpells);
      case 6: return this.shamanSpells.concat(this.defaultSpells);
      default: return this.defaultSpells;
    }
  }
  
  //getClassSpells(classNumber,level) {
  //  console.log("getSpells")
  //  switch (classNumber) {
  //    case 1: return this.Spells;
  //    default: return this.defaultSpells;
  //  }
  //}
}