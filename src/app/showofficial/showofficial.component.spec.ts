import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowofficialComponent } from './showofficial.component';

describe('ShowofficialComponent', () => {
  let component: ShowofficialComponent;
  let fixture: ComponentFixture<ShowofficialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowofficialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowofficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
