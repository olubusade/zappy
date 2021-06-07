import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreditTransactionPage } from './credit-transaction.page';

describe('CreditTransactionPage', () => {
  let component: CreditTransactionPage;
  let fixture: ComponentFixture<CreditTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditTransactionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreditTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
