import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MainService } from '../main.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  country?: any
  countryName?: any;
  regionName?: any;

  constructor(private mainService: MainService,
              private route : ActivatedRoute,
              private toastr: ToastrService,
              private router: Router,) { }

  ngOnInit(): void {
    this.countryName = this.route.snapshot.params['country']; 
    this.regionName = this.route.snapshot.params['region']; 
    this.getCountry(this.countryName)
  }

  getCountry(countryName: string): void {    
    this.mainService.getCountry(countryName).subscribe(
      (country) => {
        this.country = country;
        this.showToasterCountry(countryName);
      }, err => {
        console.log('błąd: ' + JSON.stringify(err));
        this.showErrorToasterCountry();
      }
    );
  }

  showToasterCountry(countryName: string) : void{
    this.toastr.success('Witamy w ' + countryName);
  }

  showErrorToasterCountry() : void{
    this.toastr.error('Wystapił problem z odczytaniem danych. Spróbuj ponownie!');
  }

  return(): void {
    this.router.navigate(['/region', this.regionName]);//country.name
  }
}
