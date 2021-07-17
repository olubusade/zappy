import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutomatedReportsComponent } from './automated-reports.component';

describe('AutomatedReportsComponent', () => {
  let component: AutomatedReportsComponent;
  let fixture: ComponentFixture<AutomatedReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomatedReportsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutomatedReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
