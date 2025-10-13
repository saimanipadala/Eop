import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkleOverlayComponent } from './sparkle-overlay.component';

describe('SparkleOverlayComponent', () => {
  let component: SparkleOverlayComponent;
  let fixture: ComponentFixture<SparkleOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SparkleOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SparkleOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
