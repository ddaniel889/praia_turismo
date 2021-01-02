import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AereosComponent } from './aereos.component';

describe('AereosComponent', () => {
  let component: AereosComponent;
  let fixture: ComponentFixture<AereosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AereosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AereosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
