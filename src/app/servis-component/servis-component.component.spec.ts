import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServisComponentComponent } from './servis-component.component';

describe('ServisComponentComponent', () => {
  let component: ServisComponentComponent;
  let fixture: ComponentFixture<ServisComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServisComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServisComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
