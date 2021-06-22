import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {

  title = 'Angular8Firebase';
  description = 'Angular-Fire-Demo';
 
  itemValue = 'jahanzaib';
  items: Observable<any>;
 
  constructor(public db: AngularFireDatabase,private router:Router,private dialog: MatDialog) {
    
  }
 
  
  goToCheck(){
    this.router.navigateByUrl("/checkout",{replaceUrl:true});
    this.dialog.closeAll();
  }
  ngOnInit() {
  }
  
  

}
