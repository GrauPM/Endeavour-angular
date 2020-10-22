import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartyStatsPage } from './party-stats.page';

describe('PartyStatsPage', () => {
  let component: PartyStatsPage;
  let fixture: ComponentFixture<PartyStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyStatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartyStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
