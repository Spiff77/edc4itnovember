import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandoraBoxComponent } from './pandora-box.component';

describe('PandoraBoxComponent', () => {
  let component: PandoraBoxComponent;
  let fixture: ComponentFixture<PandoraBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PandoraBoxComponent]
    });
    fixture = TestBed.createComponent(PandoraBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
