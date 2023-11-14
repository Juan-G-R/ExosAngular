import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloNameComponent } from './hello-name.component';

describe('HelloNameComponent', () => {
  let component: HelloNameComponent;
  let fixture: ComponentFixture<HelloNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloNameComponent]
    });
    fixture = TestBed.createComponent(HelloNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
