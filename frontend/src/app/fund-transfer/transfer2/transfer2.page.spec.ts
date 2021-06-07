import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Transfer2Page } from './transfer2.page';

describe('Transfer2Page', () => {
  let component: Transfer2Page;
  let fixture: ComponentFixture<Transfer2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transfer2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Transfer2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
