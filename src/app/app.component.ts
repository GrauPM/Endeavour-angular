import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CharactersService } from './services/characters.service'
import { ItemsService } from './services/items.service'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private characters: CharactersService,
    private items: ItemsService
  ) {
    this.initializeApp();
  }
  ngOnInit() {
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.initialCharacterLoad();
      console.log(this.characters)
      console.log(this.items)
    });
  }
  initialCharacterLoad() {
    this.characters.loadItems()      
    this.characters.calculateMaxHealth();
    this.characters.calculateMaxMana();
  }
}
