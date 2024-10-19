// WeatherData.model.ts
export interface WeatherData {
    cod: string;
    message: number;
    cnt: number;
    list: Forecast[];
    city: City;
  }
  
  export interface Forecast {
    dt: number; // Timestamp
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number; // Visibility in meters
    pop: number; // Probability of precipitation
    rain: Rain; // Rain volume
    sys: Sys; // System information
    dt_txt: string; // Date and time in string format
  }
  
  export interface Main {
    temp: number; // Current temperature
    feels_like: number; // Temperature feels like
    temp_min: number; // Minimum temperature
    temp_max: number; // Maximum temperature
    pressure: number; // Atmospheric pressure
    sea_level: number; // Sea level pressure
    grnd_level: number; // Ground level pressure
    humidity: number; // Humidity percentage
    temp_kf: number; // Temperature coefficient (for internal calculations)
  }
  
  export interface Weather {
    id: number; // Weather condition ID
    main: string; // Group of weather parameters (Rain, Snow, etc.)
    description: string; // Weather condition in words
    icon: string; // Weather icon ID
  }
  
  export interface Clouds {
    all: number; // Cloudiness in percentage
  }
  
  export interface Wind {
    speed: number; // Wind speed
    deg: number; // Wind direction
    gust: number; // Wind gust speed
  }
  
  export interface Rain {
    '3h': number; // Rain volume for the last 3 hours
  }
  
  export interface Sys {
    pod: string; // Part of the day (d = day, n = night)
  }
  
  export interface City {
    id: number; // City ID
    name: string; // City name
    coord: Coordinates; // Coordinates of the city
    country: string; // Country code
    population: number; // Population of the city
    timezone: number; // Timezone in seconds
    sunrise: number; // Sunrise time in Unix timestamp
    sunset: number; // Sunset time in Unix timestamp
  }
  
  export interface Coordinates {
    lat: number; // Latitude
    lon: number; // Longitude
  }
  