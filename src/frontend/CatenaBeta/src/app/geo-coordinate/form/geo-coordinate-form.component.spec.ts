import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoCoordinateFormComponent } from './geo-coordinate-form.component';

describe('GeoCoordinateFormComponent', () => {
  let component: GeoCoordinateFormComponent;
  let fixture: ComponentFixture<GeoCoordinateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoCoordinateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoCoordinateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
