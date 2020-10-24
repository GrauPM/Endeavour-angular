import { Injectable } from '@angular/core';
import { Item } from '../classes/item'
import { SpellsService } from '../services/spells.service'

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  itemList: Item[] = [
    {
      id: "knight-sword",
      name: "Knight's sword",
      strMod: 15,
      vitMod: 15,
      dexMod: 15,
      intMod: 0,
      spells: undefined,
      quote: "I have seen too many men go down, and I never permit myself to forget that one day, through accident or under the charge of a younger, stronger knight, I too will go down.",
    },
    {
      id: "tower-shield",
      name: "Tower shield",
      strMod: 10,
      vitMod: 35,
      dexMod: 0,
      intMod: 0,
      spells: undefined,
      quote: "",
    },
    {
      id: "archdruid-staff",
      name: "Archdruid's staff",
      strMod: 0,
      vitMod: 5,
      dexMod: 0,
      intMod: 15,
      spells: undefined,
      quote: "",
    },
    {
      id: "assasin-dagger",
      name: "Assasin's dagger",
      strMod: 0,
      vitMod: 5,
      dexMod: 35,
      intMod: 0,
      spells: undefined,
      quote: "",
    },
    {
      id: "reaper-scythe",
      name: "Reaper scythe",
      strMod: 0,
      vitMod: 15,
      dexMod: 0,
      intMod: 20,
      spells: undefined,
      quote: "",
    },
    {
      id: "wizard-hat",
      name: "Wizard hat",
      strMod: 0,
      vitMod: 0,
      dexMod: 0,
      intMod: 35,
      spells: undefined,
      quote: "",
    },
    {
      id: "hydrototem",
      name: "Hydrototem",
      strMod: 0,
      vitMod: 15,
      dexMod: 0,
      intMod: 25,
      spells: undefined,
      quote: "A river cuts through rock, not because of its power, but because of it's persistence",
    }
  ] 
  constructor(private spells: SpellsService) { }

  getItemSheet(itemName) {
    let itemPosition;
    switch (itemName) {
      case "knight-sword": itemPosition = 0; break;
      case "tower-shield": itemPosition = 1; break;
      case "archdruid-staff": itemPosition = 2; break;
      case "assasin-dagger": itemPosition = 3; break;
      case "reaper-scythe": itemPosition = 4; break;
      case "wizard-hat": itemPosition = 5; break;
      case "hydrototem": itemPosition = 6; break;
      default: return "Nothing!";
      
    }
    let itemSheet =   "<p>" + this.itemList[itemPosition].name + "</p>" +
                      "<p>+" + this.itemList[itemPosition].strMod + "% str</p>" +
                      "<p>+" + this.itemList[itemPosition].vitMod + "% vit</p>" +
                      "<p>+" + this.itemList[itemPosition].dexMod + "% dex</p>" +
                      "<p>+" + this.itemList[itemPosition].intMod + "% int</p>" +
                      '<p><em>"' + this.itemList[itemPosition].quote + '"</em></p>';
    return itemSheet;
    //switch (itemName) {
    //  case "knight-sword": return this.itemList[0];
    //  default: return "Nothing!";
    //}
  }
  getItemSpells(itemName) {
    return this.spells.returnSpells(itemName)
  }
  returnItemStats(itemName) {
    //console.log(this.itemList.find(element => element.id = itemName))
    //return this.itemList[0];
    let item =this.itemList.find(element => element.id == itemName);
    item.spells = this.getItemSpells(itemName)
    return item;
  }
}
