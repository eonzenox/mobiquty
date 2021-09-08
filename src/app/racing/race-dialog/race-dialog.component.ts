import { AfterViewInit, Component, ViewChild, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Driver, Race } from '../../models';

@Component({
  selector: 'app-dialog-data',
  templateUrl: './race-dialog.component.html',
  styleUrls: ['./race-dialog.component.scss'],
})
export class RaceDialogComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<Driver>();
  displayedColumns: string[] = [
    'position',
    'driver',
    'car',
    'fastestLap',
    'averageSpeed',
  ];

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public race: Race) {
    this.race = this.race.race;
    this.dataSource.data = this.race.drivers;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
