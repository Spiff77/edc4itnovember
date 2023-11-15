import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCityComponent } from './small-city.component';

describe('SmallCityComponent', () => {
  let component: SmallCityComponent;
  let fixture: ComponentFixture<SmallCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallCityComponent]
    });
    fixture = TestBed.createComponent(SmallCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
