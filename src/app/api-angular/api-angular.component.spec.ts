import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiAngularComponent } from './api-angular.component';

describe('ApiAngularComponent', () => {
  let component: ApiAngularComponent;
  let fixture: ComponentFixture<ApiAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
