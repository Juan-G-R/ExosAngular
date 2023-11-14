import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdBankComponent } from './id-bank.component';

describe('IdBankComponent', () => {
  let component: IdBankComponent;
  let fixture: ComponentFixture<IdBankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdBankComponent]
    });
    fixture = TestBed.createComponent(IdBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
