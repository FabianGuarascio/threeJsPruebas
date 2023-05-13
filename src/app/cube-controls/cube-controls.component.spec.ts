import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeControlsComponent } from './cube-controls.component';

describe('CubeControlsComponent', () => {
  let component: CubeControlsComponent;
  let fixture: ComponentFixture<CubeControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubeControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubeControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
