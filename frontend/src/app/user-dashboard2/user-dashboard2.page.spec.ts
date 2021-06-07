import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserDashboard2Page } from './user-dashboard2.page';

describe('UserDashboard2Page', () => {
  let component: UserDashboard2Page;
  let fixture: ComponentFixture<UserDashboard2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboard2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserDashboard2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
