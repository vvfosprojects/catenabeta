import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColonninaComponent } from './colonnina.component';

describe('ColonninaComponent', () => {
  let component: ColonninaComponent;
  let fixture: ComponentFixture<ColonninaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColonninaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColonninaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
