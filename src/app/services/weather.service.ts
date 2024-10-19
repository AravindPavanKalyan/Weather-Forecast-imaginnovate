import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = `5796abbde9106b7da4febfae8c44c232`;

  constructor(private http: HttpClient) {}

  async getCoordinates(city: string) {
    const url = `${environment.cityWeatherApiUrl}${city}&appid=${this.apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      const { lat, lon } = data.coord; // Extract latitude and longitude
      return { lat, lon };
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  getWeatherData(lat: string, lon: string) {
    const url = `${environment.weatherApiUrl}lat=${lat}&lon=${lon}&units=metric&appid=${this.apiKey}`; // Use metric units
    return this.http.get(url).pipe(
      map(
        (response: any) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
