import { Component, OnInit } from '@angular/core';
import { OpenWeatherMapService } from 'src/app/shared/open-weather-map.service';
import { LocalStorageService } from 'src/app/shared/local-storage.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private openWeatherMap: OpenWeatherMapService,
    private localStorege: LocalStorageService
  ) { }

  ngOnInit(): void {  }

  getCurWeather(city) {
    this.openWeatherMap.getWeather(city)
      .subscribe(
        result => {
          console.dir(result);
        },
        error => console.log(error),
      );
  }
}
