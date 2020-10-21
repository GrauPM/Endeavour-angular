import { Injectable } from '@angular/core';
import { Character } from '../classes/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  players: Character[] = [
    {
      id: 1,
      name: "Hans",
      title: "Court knight",
      level: 1,
      class: 1,
      health: undefined,
      mana: undefined,
      str: 10,
      vit: 12,
      dex: 8,
      int: 8,
      crit: 5,
      regen: 10
    },
    {
      id: 2,
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
    },
    {
      id: 3,
      name: "Smaug",
      title: "The ancient dragon",
      level: 3,
      class: 3,
      health: undefined,
      mana: undefined,
      str: 20,
      vit: 35,
      dex: 20,
      int: 20,
      crit: 15,
      regen: 30
    }
  ];

  constructor() { }

  calculateMaxHealth(position) {
    this.players[position].health = this.players[position].vit * 15;
  }
  calculateMaxMana(position) {
    this.players[position].mana = this.players[position].int * 10;
  }

  callMyName(position) {
    return this.players[position].name + ", " + this.players[position].title;
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
    this.calculateMaxHealth(position);
    this.calculateMaxMana(position);
  }
}
