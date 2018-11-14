import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColonninaLettureFormComponent } from './colonnina-letture-form.component';

describe('ColonninaLettureFormComponent', () => {
  let component: ColonninaLettureFormComponent;
  let fixture: ComponentFixture<ColonninaLettureFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColonninaLettureFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColonninaLettureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
