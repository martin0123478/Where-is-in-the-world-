import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {CountryService} from './../../../core/services/country/country.service'
@Component({
  selector: 'app-asia-detail',
  templateUrl: './asia-detail.component.html',
  styleUrls: ['./asia-detail.component.css']
})
export class AsiaDetailComponent implements OnInit {
asia:any=[]
  constructor(
    private roter:ActivatedRoute,
    private service:CountryService
  ) { }

  ngOnInit(): void {
    this.roter.params.subscribe((params:Params)=>{
      const name =params.id
    this.FetchCountry(name)
    })
  }

  FetchCountry(name:string){
    this.service.getCountry(name)
    .subscribe(data=>{
      this.asia=data;
    })
  }

}
