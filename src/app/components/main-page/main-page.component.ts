import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';

import { OpenWeatherMapService, LocalStorageService, WeatherParameters} from 'src/app/shared/index';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  private subscriber: Subscription;
  private currentRequest: WeatherParameters;
  public cityName = '';
  public dataCollection: Array<WeatherParameters>;


  constructor(private openWeatherMap: OpenWeatherMapService,
    private localStorege: LocalStorageService
  ) { }

  ngOnInit(): void { 
    let dataFromLocalStorage = this.getSavedWeatherTable();
    if (dataFromLocalStorage){
      this.dataCollection = dataFromLocalStorage;
    } else this.dataCollection = [];
  }

  getCurWeather(): void {
    if (this.cityName.length > 0){
      this.subscriber = this.openWeatherMap.getWeather(this.cityName)
        .subscribe(
          result => {
            this.currentRequest = result;
            this.dataCollection.push(this.currentRequest);
            this.cityName = '';
            this.subscriber.unsubscribe();
          },
          error => {
            console.log(error);
            this.subscriber.unsubscribe();
          },
          
        );
    }
  }
  //end getCurWeather()

  deleteCity(row): void{
    let index = +row.dataset.index;
    if (!isNaN(index)){
      this.dataCollection.splice(index,1);
    }
  }

  saveWeatherTable(): void{
    this.localStorege.setData('weatherTable', this.dataCollection);
  }
  
  getSavedWeatherTable(): Array<WeatherParameters>{
    return this.localStorege.getData('weatherTable');
  }

  deleteSavedWeatherTable(): void {
    this.localStorege.clearData('weatherTable');
    this.dataCollection=[];
  }
}
