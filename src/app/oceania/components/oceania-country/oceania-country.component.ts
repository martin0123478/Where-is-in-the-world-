import { Component, OnInit } from '@angular/core';
import {CountryService} from './../../../core/services/country/country.service'
@Component({
  selector: 'app-oceania-country',
  templateUrl: './oceania-country.component.html',
  styleUrls: ['./oceania-country.component.css']
})
export class OceaniaCountryComponent implements OnInit {
oceania:any=[]
  constructor(
    private countryService:CountryService
  ) { }

  ngOnInit(): void {
    this.getOceania()
  }

  getOceania(){
    this.countryService.getOceania()
    .subscribe((data)=>{
      this.oceania=data;
      console.log(data)
    })

  }

}
