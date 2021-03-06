import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CharactersService } from '../../services/characters.service'

@Component({
  selector: 'app-combat',
  templateUrl: './combat.page.html',
  styleUrls: ['./combat.page.scss'],
})
export class CombatPage implements OnInit {

  private enemies = [{
    id: 100,
    name: "Orc warchief",
    title: "Ancient warchief",
    level: 3,
    class: 101,
    health: 250,
    mana: 50,
    str: 20,
    vit: 16,
    dex: 10,
    int: 8,
    crit: 15,
    regen: 10
  },
  {
    id: 100,
    name: "Black dragon",
    title: "Ancient dragon",
    level: 3,
    class: 100,
    health: 600,
    mana: 150,
    str: 20,
    vit: 35,
    dex: 20,
    int: 20,
    crit: 15,
    regen: 30
  },
  {
    id: 100,
    name: "Skeleton lich",
    title: "Ancient lich",
    level: 3,
    class: 102,
    health: 180,
    mana: 150,
    str: 8,
    vit: 12,
    dex: 6,
    int: 20,
    crit: 5,
    regen: 30
  }]

  private playerCombatants: any[];
  private enemyCombatants: any[];
  combatantPriority = [];

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  ctx: CanvasRenderingContext2D;
  
  constructor(private characters: CharactersService) { }

  ngOnInit() {
    console.log("Initializing combat!")
    this.getPlayerCombatants();
    this.getEnemyCombatants();

    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.initBoard();

    this.calculatePriority();

    this.drawStatBars();
  }
  getPlayerCombatants() {
    console.log("Player combatants into the arena: ")
    this.playerCombatants = this.characters.players.slice(0,3)
    this.playerCombatants.forEach((combatant,i) => {
      this.combatantPriority.push(combatant);
      console.log("At position number " + i + ": " + combatant.name)
    });
    console.log(this.playerCombatants)
  }
  getEnemyCombatants() {
    console.log("Enemy combatants into the arena: ")
    this.enemyCombatants = this.enemies.slice(0,3)
    this.enemyCombatants.forEach((combatant,i) => {
      this.combatantPriority.push(combatant);
      console.log("At position number " + i + ": " + combatant.name)
    });
  }
  calculatePriority() {
    this.combatantPriority.sort((a, b) => (a.dex < b.dex) ? 1 : -1)
    //console.log(this.combatantPriority)

    //The callback function could calculate other properties too, to handle the case where the color is the same, and order by a secondary property as well:
    //list.sort((a, b) => (a.color > b.color) ? 1 : (a.color === b.color) ? ((a.size > b.size) ? 1 : -1) : -1 )
  }
  endTurn() {
    this.combatantPriority.shift();
  }
  initBoard() {

    
    this.ctx.clearRect(0, 0, 800, 400);

    this.ctx.canvas.width = 800;
    this.ctx.canvas.height = 400;

    this.ctx.fillStyle = "white";
    this.ctx.font = "12px Arial";
    this.ctx.fillText(this.playerCombatants[0].name, 320, 15);
    this.ctx.fillRect(250, 100, 30, 50);
    this.ctx.fillRect(230, 165, 30, 50);
    this.ctx.fillRect(250, 235, 30, 50);
    
    this.ctx.fillRect(550, 100, 30, 50);
    this.ctx.fillRect(570, 165, 30, 50);
    this.ctx.fillRect(550, 235, 30, 50);

  }

  drawStatBars() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(100, 105, 100, 10);
    this.ctx.fillRect(100, 170, 100, 10);
    this.ctx.fillRect(100, 240, 100, 10);
    
    this.ctx.fillRect(650, 105, 100, 10);
    this.ctx.fillRect(670, 170, 100, 10);
    this.ctx.fillRect(650, 240, 100, 10);

    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(100, 120, 100, 10);
    this.ctx.fillRect(100, 185, 100, 10);
    this.ctx.fillRect(100, 255, 100, 10); 

    this.ctx.fillRect(650, 120, 100, 10);
    this.ctx.fillRect(670, 185, 100, 10);
    this.ctx.fillRect(650, 255, 100, 10);
  }

}
