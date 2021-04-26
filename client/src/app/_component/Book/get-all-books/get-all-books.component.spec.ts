import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBooksComponent } from './get-all-books.component';

describe('GetAllBooksComponent', () => {
  let component: GetAllBooksComponent;
  let fixture: ComponentFixture<GetAllBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
