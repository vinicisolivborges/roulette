import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzesNeighborComponent } from './analyzes-neighbor.component';

describe('AnalyzesNeighborComponent', () => {
  let component: AnalyzesNeighborComponent;
  let fixture: ComponentFixture<AnalyzesNeighborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyzesNeighborComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyzesNeighborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
