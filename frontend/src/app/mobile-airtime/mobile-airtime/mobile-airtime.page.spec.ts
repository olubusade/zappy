import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobileAirtimePage } from './mobile-airtime.page';

describe('MobileAirtimePage', () => {
  let component: MobileAirtimePage;
  let fixture: ComponentFixture<MobileAirtimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAirtimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobileAirtimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
