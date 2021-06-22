import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Countries } from 'src/app/shared/model/countries';
import { Country } from 'src/app/shared/model/country';
import { MainService } from '../main.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  regionName?: string;
  country?: string
  countries?: any;

  constructor(private mainService: MainService,
              private router: Router,
              private route : ActivatedRoute, 
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.regionName = String(this.route.snapshot.params['region']); 
    this.getCountries(this.regionName);
  }

  getCountries(regionName: string): void {    
    this.mainService.getCountries(regionName).subscribe(
      (countries) => {
        this.countries = countries;
        this.showToasterRegion(regionName);
      }, err => {
        console.log('błąd w odczycie: ' + JSON.stringify(err));
        this.showErrorToasterRegion();
      }
    );
  }

  goToCountryDetails(regionName: any, country: Country) : void {
    this.router.navigate(['/country', regionName, country.name]);
  }

  showToasterRegion(regionName: string) : void{
    this.toastr.success('Witamy w ' + regionName);
  }

  showErrorToasterRegion() : void{
    this.toastr.error('Wystapił problem z odczytaniem danych. Spróbuj ponownie!');
  }
  

  return(): void {
    this.router.navigate(['/main']);
  }
}
