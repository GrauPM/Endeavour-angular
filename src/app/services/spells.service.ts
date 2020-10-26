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
  knightSwordSpells = [{
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
    name: "Knight's Vow",
    description: "Zzz",
    type: "magic",
    damage: 0,
    healing: 200,
    hitChance: 100,
    aura: undefined
  },{
    level: 1,
    name: "Challenge",
    description: "Challenge everything",
    type: "magic",
    damage: 20,
    healing: 0,
    hitChance: 100,
    aura: undefined
  }]
  towerShieldSpells = [{
    level: 1,
    name: "Defend",
    description: "A cleave",
    type: "physical",
    damage: 30,
    healing: 0,
    hitChance: 95,
    aura: undefined
  },{
    level: 1,
    name: "Shield bash",
    description: "Zzz",
    type: "magic",
    damage: 0,
    healing: 200,
    hitChance: 100,
    aura: undefined
  },{
    level: 1,
    name: "Push forward!",
    description: "",
    type: "magic",
    damage: 15,
    healing: 0,
    hitChance: 100,
    aura: undefined
  }]
  archdruidStaffSpells = [{
    level: 1,
    name: "Regrowth",
    description: "Regrowth",
    type: "nature",
    damage: 0,
    healing: 30,
    hitChance: 100,
    aura: undefined
  },{
    level: 1,
    name: "Entangling roots",
    description: "Roots",
    type: "nature",
    damage: 15,
    healing: 0,
    hitChance: 100,
    aura: undefined
  },{
    level: 1,
    name: "Bark armor",
    description: "Bark bark",
    type: "nature",
    damage: 0,
    healing: 0,
    hitChance: 100,
    aura: undefined
  }]
  assassinDaggerSpells = [{
    level: 1,
    name: "Backstab",
    description: "A backstab",
    type: "physical",
    damage: 70,
    healing: 0,
    hitChance: 95,
    aura: undefined
  },{
    level: 1,
    name: "Envenom",
    description: "A backstab",
    type: "physical",
    damage: 30,
    healing: 0,
    hitChance: 95,
    aura: undefined
  }]
  reaperScytheSpells = [{
    level: 1,
    name: "Corruption",
    description: "Corruption",
    type: "curse",
    damage: 50,
    healing: 0,
    hitChance: 95,
    aura: undefined
  },{
    level: 1,
    name: "Terror",
    description: "Terror",
    type: "curse",
    damage: 0,
    healing: 0,
    hitChance: 95,
    aura: undefined
  },{
    level: 1,
    name: "Amplify curse",
    description: "Amp",
    type: "curse",
    damage: 0,
    healing: 0,
    hitChance: 95,
    aura: undefined
  }]
  wizardHatSpells = [{
    level: 1,
    name: "Fireball",
    description: "A fireball",
    type: "magic",
    damage: 80,
    healing: 0,
    hitChance: 95,
    aura: undefined
  },{
    level: 1,
    name: "Frost shards",
    description: "A fireball",
    type: "magic",
    damage: 30,
    healing: 0,
    hitChance: 95,
    aura: undefined
  },{
    level: 1,
    name: "Polymorph",
    description: "A fireball",
    type: "magic",
    damage: 0,
    healing: 0,
    hitChance: 95,
    aura: undefined
  }]
  hydrototemSpells = [{
    level: 1,
    name: "Water wave",
    description: "A heal",
    type: "magic",
    damage: 0,
    healing: 100,
    hitChance: 100,
    aura: undefined
  },{
    level: 1,
    name: "Totemic aura",
    description: "A heal",
    type: "magic",
    damage: 0,
    healing: 100,
    hitChance: 100,
    aura: undefined
  },{
    level: 1,
    name: "Cleanse poison",
    description: "A heal",
    type: "magic",
    damage: 0,
    healing: 100,
    hitChance: 100,
    aura: undefined
  }]

  constructor() { }

  returnSpells(itemName) {
    switch (itemName) {
      //case 1: return this.knightSwordSpells;
      //case 2: return this.archdruidStaffSpells;
      //case 3: return this.assassinDaggerSpells;
      //case 4: return this.reaperScytheSpells;
      //case 5: return this.wizardHatSpells;
      //case 6: return this.hydrototemSpells;
      //default: return this.defaultSpells;

      case "knight-sword": return this.knightSwordSpells;
      case "tower-shield":  return this.towerShieldSpells
      case "archdruid-staff": return this.archdruidStaffSpells;
      case "assassin-dagger": return this.assassinDaggerSpells;
      case "reaper-scythe": return this.reaperScytheSpells;
      case "wizard-hat": return this.wizardHatSpells;
      case "hydrototem": return this.hydrototemSpells;
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