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
  public dataCollection: Array<WeatherParameters>=[];

  constructor(private openWeatherMap: OpenWeatherMapService,
    private localStorege: LocalStorageService
  ) { }

  ngOnInit(): void { 
    console.log(this.dataCollection)
   }

  getCurWeather(city): void {
    if (city){
      this.subscriber = this.openWeatherMap.getWeather(city)
        .subscribe(
          result => {
            this.currentRequest = result;
            console.dir(this.currentRequest);
            this.dataCollection.push(this.currentRequest);
            this.subscriber.unsubscribe();
          },
          error => {
            console.log(error);
            this.subscriber.unsubscribe();
          },
          
        );
    }
  }

  deleteCity(row):void{
    let index = +row.dataset.index;
    if (!isNaN(index)){
      this.dataCollection.splice(index,1);
    }
    
    // for (let i)
  }
}
