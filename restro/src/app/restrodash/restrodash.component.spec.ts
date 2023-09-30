import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrodashComponent } from './restrodash.component';

describe('RestrodashComponent', () => {
  let component: RestrodashComponent;
  let fixture: ComponentFixture<RestrodashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestrodashComponent]
    });
    fixture = TestBed.createComponent(RestrodashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
