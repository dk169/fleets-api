import { HttpService, Injectable, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Record } from './dto/record.dto';
import { InputLocation } from './dto/input.location.dto';
import { AxiosResponse, Axios } from 'axios';
import { map } from 'rxjs/operators';
import { headingDistanceTo, Location } from 'geolocation-utils';

@Injectable()
export class FleetsService {
  constructor(private readonly httpService: HttpService) {}
  url: string = 'https://run.mocky.io/v3/367bedbd-5bf6-4d55-a659-2eb6e4f733a2';

  filterByCountry(country: string): Observable<AxiosResponse<Record[]>> {
    return this.httpService.get(this.url).pipe(
      map((response) => response.data.records),
      map((records) =>
        records.filter((record: Record) => record.ship.country === country),
      ),
    );
  }

  findAll(): Observable<Record[]> {
    return this.httpService
      .get(this.url)
      .pipe(map((response) => response.data.records));
  }

  getShipsByDistance(inputLocation: InputLocation) {
    return this.httpService.get(this.url).pipe(
      map((response) => response.data.records),
      map((records) => {
        return records.filter((record: Record) => {
          const coordinates = {
            lat: record.position.coordinates[0],
            lon: record.position.coordinates[1],
          };

          const distance = this.getDistanceBetweenTwoLocations(
            coordinates,
            inputLocation.point,
          );
          return distance <= inputLocation.radius_km;
        });
      }),
      map((filter) => {
        return filter.sort();
      }),
    );
  }

  getDistanceBetweenTwoLocations(
    location1: Location,
    location2: Location,
  ): number {
    const { distance } = headingDistanceTo(location1, location2);
    return distance / 1000; //convert meters to km
  }
}
