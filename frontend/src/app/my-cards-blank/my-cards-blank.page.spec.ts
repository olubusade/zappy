import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyCardsBlankPage } from './my-cards-blank.page';

describe('MyCardsBlankPage', () => {
  let component: MyCardsBlankPage;
  let fixture: ComponentFixture<MyCardsBlankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCardsBlankPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyCardsBlankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
