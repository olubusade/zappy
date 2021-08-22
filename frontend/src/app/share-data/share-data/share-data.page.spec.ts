import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShareDataPage } from './share-data.page';

describe('ShareDataPage', () => {
  let component: ShareDataPage;
  let fixture: ComponentFixture<ShareDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShareDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
