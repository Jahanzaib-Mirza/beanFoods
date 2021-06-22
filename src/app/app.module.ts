import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';


import {environment} from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { NgxSkltnModule, SkltnConfig } from 'ngx-skltn';
import { ReactiveFormsModule } from '@angular/forms';
import { MdePopoverModule } from '@material-extended/mde';
import {FormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { HomeComponent } from './home/home.component';
import { DishesComponent } from './dishes/dishes.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {MatChipsModule} from '@angular/material/chips';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmComponent } from './confirm/confirm.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DishesComponent,
    CheckoutComponent,
    FooterComponent,
    HeaderComponent,
    ConfirmComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),



    //material
    
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatMenuModule,
    MatDialogModule,
    BrowserAnimationsModule,
    //-----end material
    MdePopoverModule,
    // NgxSkltnModule.forRoot(skltnConfig),
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    HttpClientModule,
    NgxPageScrollCoreModule.forRoot({duration: 1500}),
    NgxPageScrollModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
