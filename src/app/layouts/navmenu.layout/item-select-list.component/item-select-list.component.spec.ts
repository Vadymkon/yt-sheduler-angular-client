import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSelectListComponent } from './item-select-list.component';

describe('ItemSelectListComponent', () => {
  let component: ItemSelectListComponent;
  let fixture: ComponentFixture<ItemSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSelectListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemSelectListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
