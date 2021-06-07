import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalkThroughPage } from './walk-through.page';

describe('WalkThroughPage', () => {
  let component: WalkThroughPage;
  let fixture: ComponentFixture<WalkThroughPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkThroughPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalkThroughPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
