import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankHeaderComponent } from './bank-header.component';

describe('BankHeaderComponent', () => {
  let component: BankHeaderComponent;
  let fixture: ComponentFixture<BankHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankHeaderComponent]
    });
    fixture = TestBed.createComponent(BankHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
