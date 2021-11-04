import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinarPalabraComponent } from './adivinar-palabra.component';

describe('AdivinarPalabraComponent', () => {
  let component: AdivinarPalabraComponent;
  let fixture: ComponentFixture<AdivinarPalabraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdivinarPalabraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinarPalabraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
