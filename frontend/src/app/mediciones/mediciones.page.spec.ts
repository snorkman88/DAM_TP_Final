import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicionesPage } from './mediciones.page';

describe('MedicionesPage', () => {
  let component: MedicionesPage;
  let fixture: ComponentFixture<MedicionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
