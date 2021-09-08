import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Driver, Winner } from '../../models';

@Component({
  selector: 'app-driver-dialog',
  templateUrl: './driver-dialog.component.html',
  styleUrls: ['./driver-dialog.component.scss'],
})
export class DriverDialogComponent {
  winner: Winner;
  driver: Driver;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.winner = this.data.winner;
    this.driver = this.data.driver;
  }
}
