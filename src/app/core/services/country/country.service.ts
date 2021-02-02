import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http:HttpClient
  ) { }

  getCountries(){
    return this.http.get('https://restcountries.eu/rest/v2/alpha?codes=de;um;bra;is;af;ax;al;dz')
  }
  getCountry(name:string){
    return this.http.get(`https://restcountries.eu/rest/v2/name/${name}`)
  }

  getAfrica(){
    return this.http.get('https://restcountries.eu/rest/v2/region/africa')
  }

  getAmerica(){
    return this.http.get('https://restcountries.eu/rest/v2/region/americas')
  }

  getAsia(){
    return this.http.get('https://restcountries.eu/rest/v2/region/asia')
  }

  getEurope(){
    return this.http.get('https://restcountries.eu/rest/v2/region/europe')
  }

  getOceania(){
    return this.http.get('https://restcountries.eu/rest/v2/region/oceania')
  }
}
