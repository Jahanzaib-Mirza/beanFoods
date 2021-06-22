import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(private router:Router,private dialog: MatDialog) { }

  goToHome(){
    this.router.navigateByUrl("/",{replaceUrl:true});
    this.dialog.closeAll();
  }
  ngOnInit(): void {
  }

}
