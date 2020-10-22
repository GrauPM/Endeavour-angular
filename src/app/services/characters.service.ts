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
      regen: 10
    },
    {
      id: 2,
      name: "Enchantler",
      title: "Archdruid",
      level: 1,
      class: 1,
      health: undefined,
      mana: undefined,
      str: 10,
      vit: 13,
      dex: 8,
      int: 11,
      crit: 5,
      regen: 15
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
      regen: 8
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
      regen: 0
    },
    {
      id: 5,
      name: "Miles",
      title: "Mage",
      level: 1,
      class: 4,
      health: undefined,
      mana: undefined,
      str: 8,
      vit: 10,
      dex: 8,
      int: 14,
      crit: 5,
      regen: 20
    },
    {
      id: 6,
      name: "Opal",
      title: "Sea shaman",
      level: 1,
      class: 2,
      health: undefined,
      mana: undefined,
      str: 8,
      vit: 10,
      dex: 8,
      int: 12,
      crit: 5,
      regen: 15
    }
    //,
    //{
    //  id: 100,
    //  name: "Smaug",
    //  title: "Ancient dragon",
    //  level: 3,
    //  class: 100,
    //  health: undefined,
    //  mana: undefined,
    //  str: 20,
    //  vit: 35,
    //  dex: 20,
    //  int: 20,
    //  crit: 15,
    //  regen: 30
    //}
  ];

  constructor(private spells: SpellsService) { }

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

  callMyName(position) {
    return this.players[position].name;
  }
  callMyFullName(position) {
    return this.players[position].name + ", " + this.players[position].title;
  }
  callMyLevelAndTitle(position) {
    return "Level " + this.players[position].level + " " + this.players[position].title;
  }
  getClassIcon(position) {
    switch (this.players[position].class) {
      case 1: return "shield-outline"
      case 2: return "heart-circle-outline"
      case 3: return "cut-outline"
      case 4: return "flash-outline"
      default: return "bonfire-outline"
    }
  }
  getMySkills(classNumber) {
    console.log(this.spells.getClassSpells(classNumber));
  }
  getCharacterSheet(position) {
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
