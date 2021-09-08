import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { forkJoin, Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { Driver, Season } from '../app/models';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ErgastService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  generateYears() {
    const max = 2021;
    const min = max - 16;
    const years = [];

    for (let i = max; i >= min; i--) {
      years.push(i);
    }
    return years;
  }

  getSeasonDetails(year: number = 2005): Observable<Season> {
    // Get list of the races for a season
    const raceResults = this.http
      .get(`${this.apiUrl}/${year}/results.json?limit=1000`)
      .pipe(
        map((r: any) => {
          return r.MRData.RaceTable.Races.map((race: { round: any; season: any; Circuit: { circuitName: any; url: any; }; Results: any[]; raceName: any; url: any; }) => {
            return this.createRaceObject(race);
          });
        })
      );

    // Get world champion of the season for that year
    const standingsResults = this.http
      .get(`${this.apiUrl}/${year}/driverStandings.json`)
      .pipe(
        map(
          (r: any) =>
            r.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver
              .code
        )
      );

    return forkJoin({ races: raceResults, seasonWinnerCode: standingsResults});
  }

  private createRaceObject(race: { round: any; season: any; Circuit: { circuitName: any; url: any; }; Results: any[]; raceName: any; url: any; }) {
    return {
      round: race.round,
      season:race.season,
      circuitName: race.Circuit.circuitName,
      circuitUrl: race.Circuit.url,
      drivers: race.Results.map((driver) => {
        return this.createDriverObject(driver);
      }),
      winner: race.Results[0].Driver,
      raceName: race.raceName,
      raceUrl: race.url,
    };
  }

  private createDriverObject(driver: { FastestLap: { lap: string; AverageSpeed: { speed: string; units: string; }; }; Time: { time: string; }; position: any; Constructor: { name: any; }; Driver: { givenName: string; familyName: string; }; laps: any; }) {
    let tmpLap = '';
    let tmpSpeed = '';
    let tmpTime = '';

    if (driver.FastestLap) {
      tmpLap = driver.FastestLap.lap;
    }

    if (driver.FastestLap) {
      tmpSpeed =
        driver.FastestLap.AverageSpeed.speed +
        ' ' +
        driver.FastestLap.AverageSpeed.units;
    }

    if (driver.Time) {
      tmpTime = driver.Time.time;
    }

    return {
      position: driver.position,
      car: driver.Constructor.name,
      driver: driver.Driver.givenName + ' ' + driver.Driver.familyName,
      time: tmpTime,
      laps: driver.laps,
      averageSpeed: tmpSpeed,
      fastestLap: tmpLap,
    };
  }
}