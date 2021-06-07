import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NextOfKinPage } from './next-of-kin.page';

describe('NextOfKinPage', () => {
  let component: NextOfKinPage;
  let fixture: ComponentFixture<NextOfKinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextOfKinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NextOfKinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
