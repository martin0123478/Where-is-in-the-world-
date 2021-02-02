import { Component, OnInit } from '@angular/core';
import {Params,ActivatedRoute} from '@angular/router';
import {CountryService} from './../../../core/services/country/country.service'
@Component({
  selector: 'app-america-detail',
  templateUrl: './america-detail.component.html',
  styleUrls: ['./america-detail.component.css']
})
export class AmericaDetailComponent implements OnInit {
  america:any=[]
  constructor(
    private activatedRoute:ActivatedRoute,
    private service:CountryService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      const name=params.id;
      this.getCountryAmerica(name)
    })

    
  }

  getCountryAmerica(name:string){
    this.service.getCountry(name)
    .subscribe(detail=>{
      this.america=detail;
    })

  }
  

}
 