import { Injectable } from '@angular/core';
import { WeatherParameters } from 'src/app/shared/index'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  
  setData(key: string, object: Array<WeatherParameters>): void{
    localStorage.setItem(key, JSON.stringify(object));
  }

  getData(key: string): Array<WeatherParameters>{
    return JSON.parse(localStorage.getItem(key));
  }
  clearData(key: string): void{
    localStorage.removeItem(key);
  }
}