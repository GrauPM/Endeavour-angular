import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CombatPageRoutingModule } from './combat-routing.module';

import { CombatPage } from './combat.page';
import { CombatInterfaceComponent } from '../../components/combat-interface/combat-interface.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CombatPageRoutingModule
  ],
  entryComponents: [CombatInterfaceComponent],
  declarations: [CombatPage, CombatInterfaceComponent]
})
export class CombatPageModule {}
