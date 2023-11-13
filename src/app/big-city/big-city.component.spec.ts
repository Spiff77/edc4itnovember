import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCityComponent } from './big-city.component';

describe('BigCityComponent', () => {
  let component: BigCityComponent;
  let fixture: ComponentFixture<BigCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigCityComponent]
    });
    fixture = TestBed.createComponent(BigCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
