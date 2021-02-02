import { Component, OnInit } from '@angular/core';
import {CountryService} from './../../../core/services/country/country.service'

@Component({
  selector: 'app-america-country',
  templateUrl: './america-country.component.html',
  styleUrls: ['./america-country.component.css']
})
export class AmericaCountryComponent implements OnInit {
america:any=[]
  constructor(
    private countryService:CountryService
  ) { }

  ngOnInit(): void {
    this.GetAmerica();
  }

  GetAmerica(){
    this.countryService.getAmerica()
    .subscribe((data)=>{
      this.america=data
      console.log(data)
    })
  }

}
