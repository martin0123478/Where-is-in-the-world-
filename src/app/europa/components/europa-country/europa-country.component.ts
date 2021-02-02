import { Component, OnInit } from '@angular/core';
import {CountryService} from './../../../core/services/country/country.service'

@Component({
  selector: 'app-europa-country',
  templateUrl: './europa-country.component.html',
  styleUrls: ['./europa-country.component.css']
})
export class EuropaCountryComponent implements OnInit {
europa:any=[]
  constructor(
    private countryService:CountryService
  ) { }

  ngOnInit(): void {
    this.getEuropa();
  }

  getEuropa(){
    this.countryService.getEurope()
    .subscribe((data)=>{
      this.europa=data;
      console.log(data)
    })
  }

}
