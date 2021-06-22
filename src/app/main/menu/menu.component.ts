import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, 
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.showToasterHello();
  }
  
  goTo(region: string): void {
    this.router.navigate(['/region', region]);
  }

  showToasterHello() : void {
    this.toastr.success("Witamy!");
  }
}
