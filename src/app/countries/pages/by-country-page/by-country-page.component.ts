import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-county-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public countries: Country[]= [];

  constructor( private countriesService: CountriesService){}


  public searchByCountry( term: string): void{
    this.countriesService.searchCountry( term)
    .subscribe( countries =>{
      this.countries = countries;
    })
  }
}
