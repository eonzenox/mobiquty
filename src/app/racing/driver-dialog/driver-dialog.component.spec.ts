import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DriverDialogComponent } from './driver-dialog.component';

describe('DriverDialogComponent', () => {
  let component: DriverDialogComponent;
  let fixture: ComponentFixture<DriverDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverDialogComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            winner: { givenName: 'Giancarlo Fisichella' },
            driver: { laps: '57' },
          },
        },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
