import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlaycComponent } from './overlayc.component';

describe('OverlaycComponent', () => {
  let component: OverlaycComponent;
  let fixture: ComponentFixture<OverlaycComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverlaycComponent]
    });
    fixture = TestBed.createComponent(OverlaycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
