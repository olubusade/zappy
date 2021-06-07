import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoAccountPage } from './no-account.page';

describe('NoAccountPage', () => {
  let component: NoAccountPage;
  let fixture: ComponentFixture<NoAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
