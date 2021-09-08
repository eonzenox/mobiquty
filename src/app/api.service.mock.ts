import { Observable, of } from 'rxjs';
import { Race, Season } from './models';

export class ErgastServiceMock {
  generateYears() {
    return [2005, 2006];
  }

  getSeasonDetails(year: number): Observable<Season> {
    const race: Race = {
      circuitName: 'Albert Park Grand Prix Circuit',
      circuitUrl: 'http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit',
      drivers: [],
      raceName: 'Australian Grand Prix',
      raceUrl: 'http://en.wikipedia.org/wiki/2005_Australian_Grand_Prix',
      round: 1,
      winner: {
        code: 'FIS',
        dateOfBirth: '1973-01-14',
        familyName: 'Fisichella',
        givenName: 'Giancarlo',
        nationality: 'Italian',
        url: 'http://en.wikipedia.org/wiki/Giancarlo_Fisichella',
      },
      race: new Race
    };

    return of({
      races: [race],
      seasonWinnerCode: 'ALO',
    });
  }
}
