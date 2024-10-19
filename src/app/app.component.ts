import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

// Define the WeatherSummary interface
export interface WeatherSummary {
  date: string; // Formatted date string
  minTemp: number; // Minimum temperature
  maxTemp: number; // Maximum temperature
  pressure: number; // Atmospheric pressure
  humidity: number; // Humidity percentage
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Weather-Forecast-imaginnovate';

  forecasts: WeatherSummary[] = []; // Use WeatherSummary interface
  isLoading = false;

  constructor(
    private weatherService: WeatherService) {}

  async searchWeather(city: string) {
    this.forecasts =[];
    this.isLoading = true;
    const coordinates = await this.weatherService.getCoordinates(city); // Wait for the coordinates to be fetched
    if (coordinates) {
      const { lat, lon } = coordinates; // Destructure latitude and longitude
      this.weatherService.getWeatherData(lat, lon).subscribe({
        next: (weatherData) => {
          // Handle the weather data here
          console.log(weatherData);
          this.forecasts = weatherData.daily.slice(0, 5).map((forecast: any) => ({
            date: new Date(forecast.dt * 1000).toLocaleDateString(), // Convert timestamp to formatted date
            minTemp: forecast.temp.min, // Extract min temperature from temp object
            maxTemp: forecast.temp.max, // Extract max temperature from temp object
            pressure: forecast.pressure, // Extract pressure
            humidity: forecast.humidity, // Extract humidity
          }));
          this.isLoading = false; // Set loading state to false
        },
        error: (error) => {
          console.error('Error fetching weather data:', error);
          this.isLoading = false; // Set loading state to false
        },
      });
    } else {
      this.isLoading = false; // Set loading state to false if coordinates are not found
    }

  }
}
