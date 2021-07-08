import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserUpgradePage } from './user-upgrade.page';

describe('UserUpgradePage', () => {
  let component: UserUpgradePage;
  let fixture: ComponentFixture<UserUpgradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUpgradePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserUpgradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
