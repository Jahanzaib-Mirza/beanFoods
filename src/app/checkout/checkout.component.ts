import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
orders:any;
items: Observable<any>;

  constructor(public db: AngularFireDatabase,public dialog: MatDialog,) { 
    this.orders = JSON.parse(localStorage.getItem("orders"));
    console.log(this.orders);
    this.items = db.list('items').valueChanges();

  };

  order() {
    this.db.list('items').push(this.orders);
    localStorage.clear();
    this.addItemDialog();
  }

  ngOnInit(): void {
  }

  addItemDialog(): void {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '350px',
    });
    dialogRef.afterClosed().subscribe(result => {
      // if (result) {
      //   this.deliveryDate = result.deliveryDate;
      //   this.deliveryTime = result.deliveryTime;
      //   this.selectedDeliveryTime.data = result.deliveryDate + ' ' + result.deliveryTime;
      // } else {
      //   this.selectedDeliveryTime = this.deliveryTimeSelection[0];
      // }
    });
  }

}
