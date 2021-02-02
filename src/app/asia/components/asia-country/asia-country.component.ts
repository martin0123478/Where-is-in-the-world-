import { Component, OnInit } from '@angular/core';
import { CountryService} from './../../../core/services/country/country.service'
@Component({
  selector: 'app-asia-country',
  templateUrl: './asia-country.component.html',
  styleUrls: ['./asia-country.component.css']
})
export class AsiaCountryComponent implements OnInit {
asia:any=[]
  constructor(
    private service:CountryService
  ) { }

  ngOnInit(): void {
    this.getAsia();
  }
  getAsia(){
    this.service.getAsia()
    .subscribe((data)=>{
      this.asia=data;
      console.log(data);
    })
  }

}
