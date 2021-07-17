import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PinResetOtpPage } from './pin-reset-otp.page';

describe('PinResetOtpPage', () => {
  let component: PinResetOtpPage;
  let fixture: ComponentFixture<PinResetOtpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinResetOtpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PinResetOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
