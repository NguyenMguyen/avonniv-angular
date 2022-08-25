import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindGrantsComponent } from './find-grants.component';

describe('FindGrantsComponent', () => {
  let component: FindGrantsComponent;
  let fixture: ComponentFixture<FindGrantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindGrantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindGrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
