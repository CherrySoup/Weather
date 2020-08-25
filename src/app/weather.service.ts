import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


export type Weath = {
  'coord': {
    'lon': string,
    'lat': string
  },
  'weather': [
    {
      'id': string,
      'main': string,
      'description': string,
      'icon': string
    }
  ],
  'base': string,
  'main': {
    'temp': number,
    'feels_like': number,
    'temp_min': string,
    'temp_max': string,
    'pressure': number,
    'humidity': string
  },
  'visibility': string,
  'wind': {
    'speed': string,
    'deg': string
  },
  'clouds': {
    'all': string
  },
  'dt': string,
  'sys': {
    'type': string,
    'id': string,
    'message': string,
    'country': string,
    'sunrise': string,
    'sunset': string
  },
  'timezone': string,
  'id': string,
  'name': string,
  'cod': string
};

@Injectable({providedIn: 'root'})
export class WeatherService {

  private API_PATH = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {
  }

  search(query: string): Observable<Weath> {
    return this.http
      .get<Weath>(`${this.API_PATH}?q=${query}&appid=29144c3a7b04e77b6a3b40de249dc2b0`);
  }

}
