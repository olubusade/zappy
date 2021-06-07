import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaywithCardPage } from './paywith-card.page';

describe('PaywithCardPage', () => {
  let component: PaywithCardPage;
  let fixture: ComponentFixture<PaywithCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaywithCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaywithCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
