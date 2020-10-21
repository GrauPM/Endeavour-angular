import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CharactersService } from './services/characters.service'


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
    private characters: CharactersService
  ) {
    this.initializeApp();
  }
  ngOnInit() {
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.characters.calculateMaxHealth(0);
      this.characters.calculateMaxMana(0);
      this.characters.calculateMaxHealth(1);
      this.characters.calculateMaxMana(1);
      this.characters.calculateMaxHealth(2);
      this.characters.calculateMaxMana(2);
    });
  }
}
