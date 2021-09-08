export class Driver {
  code!: string;
  familyName!: string;
  givenName!: string;
  dateOfBirth!: string;
  nationality!: string;
  url!: string;
  laps!: string;
  time!: string;
  car!: string;
  fastestLap!: string;
  averageSpeed!: string;
}

export class Winner {
  code!: string;
  dateOfBirth!: string;
  nationality!: string;
  familyName!: string;
  givenName!: string;
  url!: string;
}

export class Race {
  round!: number;
  season!: number;
  circuitName!: string;
  circuitUrl!: string;
  raceName!: string;
  raceUrl!: string;
  winner!: Winner;
  drivers: Driver[] = [];
  race?: Race;
}

export class Season {
  races: Race[] = [];
  seasonWinnerCode!: string;
}
