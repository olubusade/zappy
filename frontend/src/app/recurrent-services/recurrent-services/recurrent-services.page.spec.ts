import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecurrentServicesPage } from './recurrent-services.page';

describe('RecurrentServicesPage', () => {
  let component: RecurrentServicesPage;
  let fixture: ComponentFixture<RecurrentServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurrentServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecurrentServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
