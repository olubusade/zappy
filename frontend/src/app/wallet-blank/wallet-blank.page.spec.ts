import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletBlankPage } from './wallet-blank.page';

describe('WalletBlankPage', () => {
  let component: WalletBlankPage;
  let fixture: ComponentFixture<WalletBlankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletBlankPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletBlankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
