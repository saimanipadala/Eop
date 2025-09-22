import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipBookComponent } from './flip-book.component';

describe('FlipBookComponent', () => {
  let component: FlipBookComponent;
  let fixture: ComponentFixture<FlipBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
