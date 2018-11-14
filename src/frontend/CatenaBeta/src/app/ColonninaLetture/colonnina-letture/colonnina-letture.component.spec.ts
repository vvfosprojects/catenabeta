import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColonninaLettureComponent } from './colonnina-letture.component';

describe('ColonninaLettureComponent', () => {
  let component: ColonninaLettureComponent;
  let fixture: ComponentFixture<ColonninaLettureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColonninaLettureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColonninaLettureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
