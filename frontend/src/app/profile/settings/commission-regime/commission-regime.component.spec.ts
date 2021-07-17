import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommissionRegimeComponent } from './commission-regime.component';

describe('CommissionRegimeComponent', () => {
  let component: CommissionRegimeComponent;
  let fixture: ComponentFixture<CommissionRegimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionRegimeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommissionRegimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
