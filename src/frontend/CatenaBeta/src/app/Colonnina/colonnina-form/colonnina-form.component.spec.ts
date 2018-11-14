import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColonninaFormComponent } from './colonnina-form.component';

describe('ColonninaFormComponent', () => {
  let component: ColonninaFormComponent;
  let fixture: ComponentFixture<ColonninaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColonninaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColonninaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
