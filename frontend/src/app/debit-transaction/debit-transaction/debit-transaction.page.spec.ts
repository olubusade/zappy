import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DebitTransactionPage } from './debit-transaction.page';

describe('DebitTransactionPage', () => {
  let component: DebitTransactionPage;
  let fixture: ComponentFixture<DebitTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitTransactionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DebitTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
