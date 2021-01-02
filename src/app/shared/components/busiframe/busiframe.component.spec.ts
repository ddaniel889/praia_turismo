import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusiframeComponent } from './busiframe.component';

describe('BusiframeComponent', () => {
  let component: BusiframeComponent;
  let fixture: ComponentFixture<BusiframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusiframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusiframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
