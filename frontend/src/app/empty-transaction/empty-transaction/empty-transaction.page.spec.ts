import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmptyTransactionPage } from './empty-transaction.page';

describe('EmptyTransactionPage', () => {
  let component: EmptyTransactionPage;
  let fixture: ComponentFixture<EmptyTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyTransactionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
