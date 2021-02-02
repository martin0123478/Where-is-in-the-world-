import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {CountryService} from './.././../../core/services/country/country.service'
@Component({
  selector: 'app-oceania-detail',
  templateUrl: './oceania-detail.component.html',
  styleUrls: ['./oceania-detail.component.css']
})
export class OceaniaDetailComponent implements OnInit {
oceania:any=[]
  constructor(
    private router:ActivatedRoute,
    private service:CountryService
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe((params:Params)=>{
      const name=params.id
      this.getOcenia(name);
    })
  }
  getOcenia(name:string){
    this.service.getCountry(name)
    .subscribe(country=>{
      this.oceania=country;
    })
  }
}
