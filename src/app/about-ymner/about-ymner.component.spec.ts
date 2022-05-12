import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutYmnerComponent } from './about-ymner.component';

describe('AboutYmnerComponent', () => {
  let component: AboutYmnerComponent;
  let fixture: ComponentFixture<AboutYmnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutYmnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutYmnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
