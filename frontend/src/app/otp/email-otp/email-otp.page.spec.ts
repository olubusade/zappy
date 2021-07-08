import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmailOtpPage } from './email-otp.page';

describe('EmailOtpPage', () => {
  let component: EmailOtpPage;
  let fixture: ComponentFixture<EmailOtpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailOtpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmailOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
