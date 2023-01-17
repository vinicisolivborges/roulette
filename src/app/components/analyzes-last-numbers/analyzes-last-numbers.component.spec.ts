import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzesLastNumbersComponent } from './analyzes-last-numbers.component';

describe('AnalyzesLastNumbersComponent', () => {
  let component: AnalyzesLastNumbersComponent;
  let fixture: ComponentFixture<AnalyzesLastNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyzesLastNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyzesLastNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
