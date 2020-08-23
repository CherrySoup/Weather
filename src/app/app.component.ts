import {Component} from '@angular/core';
import {WeatherService} from './weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private gbs: WeatherService) {
  }


  allWeath;
  searchIndex;
  temp = true;

  switchTemp() {
    this.temp = this.temp !== true;
  }

  checkCity() {
    this.gbs.search(this.searchIndex).subscribe(
      (data) => {
        this.allWeath = data;
      }
    );
  }

  clear() {
    this.allWeath = null;
    this.searchIndex = null;
  }
}

