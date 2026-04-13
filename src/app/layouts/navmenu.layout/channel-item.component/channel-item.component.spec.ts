import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelItemComponent } from './channel-item.component';

describe('ChannelItemComponent', () => {
  let component: ChannelItemComponent;
  let fixture: ComponentFixture<ChannelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChannelItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChannelItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
