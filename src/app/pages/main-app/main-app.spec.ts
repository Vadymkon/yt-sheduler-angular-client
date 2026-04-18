import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainApp } from './main-app';

describe('MainApp', () => {
  let component: MainApp;
  let fixture: ComponentFixture<MainApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainApp],
    }).compileComponents();

    fixture = TestBed.createComponent(MainApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
