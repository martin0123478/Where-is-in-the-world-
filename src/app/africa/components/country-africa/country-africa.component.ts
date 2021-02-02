import { Component, OnInit } from '@angular/core';
import {CountryService} from './../../../core/services/country/country.service'
@Component({
  selector: 'app-country-africa',
  templateUrl: './country-africa.component.html',
  styleUrls: ['./country-africa.component.css']
})
export class CountryAfricaComponent implements OnInit {
africa:any=[]
  constructor(
    private countryService:CountryService
  ) { }

  ngOnInit(): void {
    this.getAfrica();
  }

  getAfrica(){
    this.countryService.getAfrica()
    .subscribe((data)=>{
      this.africa=data
      console.log(data)
    })
  }

}
