import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {CountryService} from './../../../core/services/country/country.service'
@Component({
  selector: 'app-europa-detail',
  templateUrl: './europa-detail.component.html',
  styleUrls: ['./europa-detail.component.css']
})
export class EuropaDetailComponent implements OnInit {
europe:any=[]
  constructor(
    private router:ActivatedRoute,
    private service:CountryService
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe((params:Params)=>{
      const name=params.id
      this.getCountry(name)
    })
  }

  getCountry(name:string){
    this.service.getCountry(name)
    .subscribe(country=>{
      this.europe=country;
    })
  }

}
