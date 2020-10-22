import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartyStatsPageRoutingModule } from './party-stats-routing.module';

import { PartyStatsPage } from './party-stats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartyStatsPageRoutingModule
  ],
  declarations: [PartyStatsPage]
})
export class PartyStatsPageModule {}
