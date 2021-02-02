import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router'
import {CountryService} from './../../../core/services/country/country.service'
@Component({
  selector: 'app-africa-detail',
  templateUrl: './africa-detail.component.html',
  styleUrls: ['./africa-detail.component.css']
})
export class AfricaDetailComponent implements OnInit {
africa
  constructor(
    private activatedRoute:ActivatedRoute,
    private service:CountryService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      const name = params.id;
      // console.log(name);
      this.fetchCountry(name)
    })
  }

  fetchCountry(name:string){
    this.service.getCountry(name)
    .subscribe(data=>{
      console.log(data)
      this.africa=data;
     
    })
  }

}
