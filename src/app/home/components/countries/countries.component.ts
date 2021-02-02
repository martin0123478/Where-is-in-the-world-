import { Component, OnInit } from '@angular/core';
import {CountryService} from './../../../core/services/country/country.service'
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
countries:any=[]
  constructor(
  private  http:CountryService
  ) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries(){
    //const world =['Germany','United States of America','Brazil','Iceland', 'Afganistan', 'Aland Islands', 'Albania', 'Algeria']
    
      this.http.getCountries()
    .subscribe((c)=>{
      
      this.countries=c;
      console.log(c)
    })
  
    }
    

}
