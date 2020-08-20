import { Component} from '@angular/core';
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor(private gbs: WeatherService) {
  }



  allWeath;
  searchIndex;
  temp = true;

check_switch(){
this.temp = this.temp !== true;
}
  checkBtn() {
    this.gbs.search(this.searchIndex).subscribe(
      (data) => {
        console.log(data);
        this.allWeath = data;
      }
    );
  }

  clear(){
  this.allWeath = null;
  this.searchIndex = null;
  }
}

