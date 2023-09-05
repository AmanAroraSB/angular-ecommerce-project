import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSingleComponent } from './item-single.component';

describe('ItemSingleComponent', () => {
  let component: ItemSingleComponent;
  let fixture: ComponentFixture<ItemSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemSingleComponent]
    });
    fixture = TestBed.createComponent(ItemSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
