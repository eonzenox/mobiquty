import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DriverDialogComponent } from './driver-dialog/driver-dialog.component';
import { ErgastService } from '../api.service';
import { Race, Driver, Winner } from '../models';

@Component({
  selector: 'app-racing',
  templateUrl: './racing.component.html',
  styleUrls: ['./racing.component.scss']
})
  
export class HomeComponent implements OnInit {
    isLoading = false;
    isRaceLoading = false;
    racesList!: Race[];
    winnerCode!: string;
    yearList!: Array<number>;
   
    

    
    constructor(private ergastService: ErgastService, public dialog: MatDialog) {}
  
    ngOnInit(): void {
      this.yearList = this.ergastService.generateYears();
    }
  
    getSeasonByYear(year: number) {
      this.isRaceLoading = true;
      this.ergastService.getSeasonDetails(year).subscribe((res) => {
        this.isRaceLoading = false;
        this.racesList = res.races;
        this.winnerCode = res.seasonWinnerCode;
      });
    }
  
    isRaceWinnerSeasonWinner(race: Race) {
      return race.winner.code === this.winnerCode;
  
    }
  
    openDriverDialog(winner: Winner, driver: Driver[]) {
      this.dialog.open(DriverDialogComponent, {
        data: {
          winner,
          driver,
        },
      });
    }
  }
  