import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertsPreferencePage } from './alerts-preference.page';

describe('AlertsPreferencePage', () => {
  let component: AlertsPreferencePage;
  let fixture: ComponentFixture<AlertsPreferencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsPreferencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertsPreferencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
