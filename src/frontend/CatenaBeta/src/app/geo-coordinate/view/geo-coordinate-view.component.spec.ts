import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoCoordinateViewComponent } from './geo-coordinate-view.component';

describe('GeoCoordinateViewComponent', () => {
  let component: GeoCoordinateViewComponent;
  let fixture: ComponentFixture<GeoCoordinateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoCoordinateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoCoordinateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
