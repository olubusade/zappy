import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransferInstruction1Page } from './transfer-instruction1.page';

describe('TransferInstruction1Page', () => {
  let component: TransferInstruction1Page;
  let fixture: ComponentFixture<TransferInstruction1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferInstruction1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransferInstruction1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
