import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransactionPinPage } from './transaction-pin.page';

describe('TransactionPinPage', () => {
  let component: TransactionPinPage;
  let fixture: ComponentFixture<TransactionPinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionPinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionPinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
