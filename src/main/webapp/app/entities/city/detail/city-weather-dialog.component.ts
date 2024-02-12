import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { ICity } from '../city.model';
import { CityService } from '../service/city.service';

@Component({
  standalone: true,
  templateUrl: './city-weather-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class CityWeatherDialogComponent {
  city?: ICity;

  iconSrc: string | undefined;
  temp: number | undefined;

  constructor(
    protected cityService: CityService,
    protected activeModal: NgbActiveModal,
  ) {
    this.iconSrc = '';
    this.temp = 0;
  }

  cancel(): void {
    this.activeModal.dismiss();
  }

  ngOnInit(): void {
    if (this.city && this.city.name) {
      const cityName = this.city.name;
      this.getWeather(cityName);
    } else {
      console.error('City name is null or undefined');
    }
  }

  getWeather(name: string): void {
    this.cityService.getWeather(name).subscribe({
      next: response => {
        this.iconSrc = response.body?.current.condition.icon;
        this.temp = response.body?.current.temp_c;
      },
    });
  }
}
