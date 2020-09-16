import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WeatherParameters } from 'src/app/shared/index'

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService {
  private keyAPI = '918f548e1e8a957c2347db017cc802f4';
  private cityName: string;
  private baseURL = `http://api.openweathermap.org/data/2.5/weather`

  constructor(private http: HttpClient) { }

  public getWeather(city: string): Observable<WeatherParameters>{
    this.cityName = city;
    const url = `${this.baseURL}?q=${this.cityName}&APPID=${this.keyAPI}&units=metric`
    return this.http.get(url) as Observable<WeatherParameters>;    
  }
}