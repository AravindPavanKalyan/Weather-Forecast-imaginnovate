import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { environment } from './../../environments/environment';

// Define interfaces for the expected response from OpenWeatherMap
export interface Forecast {
  dt: number; // Date and time
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
}

export interface WeatherResponse {
  list: Forecast[];
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private appid = `5796abbde9106b7da4febfae8c44c232`;

  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<WeatherResponse> {
    const url = `${environment.weatherApiUrl}${city}&appid=${this.appid}&units=metric`; // Use metric units
    return this.http.get<WeatherResponse>(url).pipe(
      catchError(error => {
        console.error('Error fetching weather data:', error);
        return of({ list: [] }); // Return an empty forecast list on error
      })
    );
  }
}
