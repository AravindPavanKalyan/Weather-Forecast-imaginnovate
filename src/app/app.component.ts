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
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather-Forecast-imaginnovate';
  qwerty = {
    "message": "accurate",
    "cod": "200",
    "count": 1,
    "list": [
        {
            "id": 1253102,
            "name": "Visakhapatnam",
            "coord": {
                "lat": 17.69,
                "lon": 83.2093
            },
            "main": {
                "temp": 32.94,
                "feels_like": 39.94,
                "temp_min": 32.94,
                "temp_max": 32.94,
                "pressure": 1009,
                "humidity": 62,
                "sea_level": 1009,
                "grnd_level": 1004
            },
            "dt": 1729321758,
            "wind": {
                "speed": 5.14,
                "deg": 90
            },
            "sys": {
                "country": "IN"
            },
            "rain": null,
            "snow": null,
            "clouds": {
                "all": 40
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ]
        },
        {
          "id": 1253102,
          "name": "Visakhapatnam",
          "coord": {
              "lat": 17.69,
              "lon": 83.2093
          },
          "main": {
              "temp": 32.94,
              "feels_like": 39.94,
              "temp_min": 32.94,
              "temp_max": 32.94,
              "pressure": 1009,
              "humidity": 62,
              "sea_level": 1009,
              "grnd_level": 1004
          },
          "dt": 1729321758,
          "wind": {
              "speed": 5.14,
              "deg": 90
          },
          "sys": {
              "country": "IN"
          },
          "rain": null,
          "snow": null,
          "clouds": {
              "all": 40
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ]
      },
      {
        "id": 1253102,
        "name": "Visakhapatnam",
        "coord": {
            "lat": 17.69,
            "lon": 83.2093
        },
        "main": {
            "temp": 32.94,
            "feels_like": 39.94,
            "temp_min": 32.94,
            "temp_max": 32.94,
            "pressure": 1009,
            "humidity": 62,
            "sea_level": 1009,
            "grnd_level": 1004
        },
        "dt": 1729321758,
        "wind": {
            "speed": 5.14,
            "deg": 90
        },
        "sys": {
            "country": "IN"
        },
        "rain": null,
        "snow": null,
        "clouds": {
            "all": 40
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ]
    },
    {
      "id": 1253102,
      "name": "Visakhapatnam",
      "coord": {
          "lat": 17.69,
          "lon": 83.2093
      },
      "main": {
          "temp": 32.94,
          "feels_like": 39.94,
          "temp_min": 32.94,
          "temp_max": 32.94,
          "pressure": 1009,
          "humidity": 62,
          "sea_level": 1009,
          "grnd_level": 1004
      },
      "dt": 1729321758,
      "wind": {
          "speed": 5.14,
          "deg": 90
      },
      "sys": {
          "country": "IN"
      },
      "rain": null,
      "snow": null,
      "clouds": {
          "all": 40
      },
      "weather": [
          {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
          }
      ]
  },
  {
    "id": 1253102,
    "name": "Visakhapatnam",
    "coord": {
        "lat": 17.69,
        "lon": 83.2093
    },
    "main": {
        "temp": 32.94,
        "feels_like": 39.94,
        "temp_min": 32.94,
        "temp_max": 32.94,
        "pressure": 1009,
        "humidity": 62,
        "sea_level": 1009,
        "grnd_level": 1004
    },
    "dt": 1729321758,
    "wind": {
        "speed": 5.14,
        "deg": 90
    },
    "sys": {
        "country": "IN"
    },
    "rain": null,
    "snow": null,
    "clouds": {
        "all": 40
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }
    ]
}
    ]
}

  forecasts: WeatherSummary[] = []; // Use WeatherSummary interface
  isLoading = false;

  constructor(private weatherService: WeatherService) {}

  searchWeather(city: string) {
    this.isLoading = true;
    this.weatherService.getWeatherData(city).subscribe(
      (data: any) => {
        this.forecasts = this.qwerty.list.map((forecast: any) => ({
          date: new Date(forecast.dt * 1000).toLocaleDateString(), // Convert timestamp to formatted date
          minTemp: forecast.main.temp_min, // Extract min temperature
          maxTemp: forecast.main.temp_max, // Extract max temperature
          pressure: forecast.main.pressure, // Extract pressure
          humidity: forecast.main.humidity // Extract humidity
        }));
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error fetching weather data:', error);
        this.isLoading = false;
      }
    );
  }
}
