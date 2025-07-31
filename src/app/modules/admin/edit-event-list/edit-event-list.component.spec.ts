import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventListComponent } from './edit-event-list.component';

describe('EditEventListComponent', () => {
  let component: EditEventListComponent;
  let fixture: ComponentFixture<EditEventListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEventListComponent]
    });
    fixture = TestBed.createComponent(EditEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
