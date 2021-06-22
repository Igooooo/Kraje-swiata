import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAboutMeComponent } from 'src/app/main/dialog-about-me/dialog-about-me.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public dialog: MatDialog) { }  //public dialog: MatDialog

  ngOnInit(): void {
  }

  openDialog() : void {
    this.dialog.open(DialogAboutMeComponent, {
      width: '500px'
    });
  }

}
