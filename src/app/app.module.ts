import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { MainSidebarComponent } from './main/main-sidebar/main-sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { NewSpotorderComponent } from './pages/new-spotorder/new-spotorder.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CustConfirmationsComponent } from './pages/cust-confirmations/cust-confirmations.component';
import { CustPaymentsComponent } from './pages/cust-payments/cust-payments.component';
import { BidsmadeComponent } from './pages/bidsmade/bidsmade.component';
import { BidsacceptedComponent } from './pages/bidsaccepted/bidsaccepted.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainSidebarComponent,
    HomeComponent,
    NewSpotorderComponent,
    PageNotFoundComponent,
    CustConfirmationsComponent,
    CustPaymentsComponent,
    BidsmadeComponent,
    BidsacceptedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
