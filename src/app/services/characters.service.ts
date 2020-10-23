import { Injectable } from '@angular/core';
import { Character } from '../classes/character';
import { SpellsService } from '../services/spells.service'

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  players: Character[] = [
    {
      id: 1,
      name: "Hans",
      title: "Knight",
      level: 1,
      class: 1,
      health: undefined,
      mana: undefined,
      str: 12,
      vit: 14,
      dex: 8,
      int: 8,
      crit: 5,
      regen: 10,
      spells: []
    },
    {
      id: 2,
      name: "Enchantler",
      title: "Archdruid",
      level: 1,
      class: 2,
      health: undefined,
      mana: undefined,
      str: 10,
      vit: 13,
      dex: 8,
      int: 11,
      crit: 5,
      regen: 15,
      spells: []
    },
    {
      id: 3,
      name: "Arachne",
      title: "Spider assasin",
      level: 1,
      class: 3,
      health: undefined,
      mana: undefined,
      str: 6,
      vit: 12,
      dex: 14,
      int: 8,
      crit: 10,
      regen: 8,
      spells: []
    },
    {
      id: 4,
      name: "The elder",
      title: "Plague rat",
      level: 1,
      class: 4,
      health: undefined,
      mana: undefined,
      str: 6,
      vit: 12,
      dex: 6,
      int: 16,
      crit: 5,
      regen: 0,
      spells: []
    },
    {
      id: 5,
      name: "Miles",
      title: "Mage",
      level: 1,
      class: 5,
      health: undefined,
      mana: undefined,
      str: 8,
      vit: 10,
      dex: 8,
      int: 14,
      crit: 5,
      regen: 20,
      spells: []
    },
    {
      id: 6,
      name: "Opal",
      title: "Sea shaman",
      level: 1,
      class: 6,
      health: undefined,
      mana: undefined,
      str: 8,
      vit: 10,
      dex: 8,
      int: 12,
      crit: 5,
      regen: 15,
      spells: []
    }
  ];

  constructor(private spells: SpellsService) { }
  loadSpells() {
    this.players.forEach(individual => {
      individual.spells = this.spells.loadSpells(individual.class,individual.level)
      //console.log(this.spells.loadSpells(individual.class,individual.level))
      //console.log(individual)
    });
  }
  calculateMaxHealth() {
    this.players.forEach(element => {
      element.health = element.vit * 15;
    });
  }
  calculateMaxMana() {
    this.players.forEach(element => {
      element.mana = element.int * 10;
    });
  }
  getMyName(position) {
    return this.players[position].name;
  }
  getMyFullName(position) {
    return this.players[position].name + ", " + this.players[position].title;
  }
  getMyLevelAndTitle(position) {
    return "Level " + this.players[position].level + " " + this.players[position].title;
  }
  getMySpellList(position) {
    let spellList = [];
    //console.log(this.players[position].spells)
    this.players[position].spells.forEach(spell => {
      spellList.push(spell.name)
    });
    return spellList;
  }
  getClassIcon(position) {
    switch (this.players[position].class) {
      case 1: case 2: return "shield-outline"
      case 3: return "cut-outline"
      case 4: case 5: return "flash-outline"
      case 6: return "heart-circle-outline"
      default: return "bonfire-outline"
    }
  }
  buttonUseSpell(position,buttonNum) {
    console.log("Casted spell: " + this.players[position].spells[buttonNum].name)
  }
  getCharacterSheet(position) {
    //console.log(this.players[position])
    let stats = "<p>Name: " + this.players[position].name + ", " + this.players[position].title+ "</p>" +
                "<p>Level: " + this.players[position].level + "</p>" +
                "<p>Health: " + this.players[position].health + "</p>" +
                "<p>Mana: " + this.players[position].mana + "</p>" +
                "<p>Str: " + this.players[position].str + "</p>" +
                "<p>Vit: " + this.players[position].vit + "</p>" +
                "<p>Dex: " + this.players[position].dex + "</p>" +
                "<p>Int: " + this.players[position].int + "</p>" +
                "<p>Crit chance: " + this.players[position].crit + "%</p>" +
                "<p>Mana regen: " + this.players[position].regen + " per turn</p>"
    return stats;
  }
  levelUp(position) {
    this.players[position].level++;
    this.players[position].str = this.players[position].str + 2;
    this.players[position].vit = this.players[position].vit + 4;
    this.players[position].dex = this.players[position].dex + 2;
    this.players[position].int = this.players[position].int + 2;
    this.players[position].crit = this.players[position].crit + .25;
    this.players[position].regen = this.players[position].regen + .5;
    this.calculateMaxHealth();
    this.calculateMaxMana();
  }
}
