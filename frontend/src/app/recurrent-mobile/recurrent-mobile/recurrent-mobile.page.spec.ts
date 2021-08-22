import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecurrentMobilePage } from './recurrent-mobile.page';

describe('RecurrentMobilePage', () => {
  let component: RecurrentMobilePage;
  let fixture: ComponentFixture<RecurrentMobilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurrentMobilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecurrentMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
