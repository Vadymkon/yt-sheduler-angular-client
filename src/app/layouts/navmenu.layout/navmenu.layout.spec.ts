import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavmenuLayout } from '././navmenu.layout';

describe('NavmenuLayout', () => {
  let component: NavmenuLayout;
  let fixture: ComponentFixture<NavmenuLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavmenuLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(NavmenuLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
