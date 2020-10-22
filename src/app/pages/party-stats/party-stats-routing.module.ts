import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartyStatsPage } from './party-stats.page';

const routes: Routes = [
  {
    path: '',
    component: PartyStatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartyStatsPageRoutingModule {}
