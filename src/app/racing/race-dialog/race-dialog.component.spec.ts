import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { RaceDialogComponent } from './race-dialog.component';

describe('RaceDialogComponent', () => {
  let component: RaceDialogComponent;
  let fixture: ComponentFixture<RaceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaceDialogComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            race: {
              drivers: { givenName: 'Giancarlo Fisichella' }
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
