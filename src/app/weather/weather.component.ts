import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  location = '';
  data = null;

  constructor() {}

  calculate(kelvin) {
    return Math.ceil(kelvin - 272.15);
  }

  handleSearch() {
    console.log(this.location);

    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        this.location +
        '&appid=9387b8b6fc54715d8714a0b6b359cc4f'
    )
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        this.data = data;
      });
  }
}
