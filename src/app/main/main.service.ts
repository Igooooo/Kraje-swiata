import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private regionUrl: string = 'https://restcountries.eu/rest/v2/region/';
  private countryUrl: string = 'https://restcountries.eu/rest/v2/name/'

  constructor(private http: HttpClient) { }

  getCountries(region: string): Observable<{}> {
    return this.http.get<{}>(this.regionUrl + region);
  }

  getCountry(name: string) : Observable<{}> { 
    return this.http.get<{}>(this.countryUrl+`${name}`) //samo formatuje na JSON
  }
}
