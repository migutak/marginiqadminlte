import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CustConfirmationsComponent } from './pages/cust-confirmations/cust-confirmations.component';
import { CustPaymentsComponent } from './pages/cust-payments/cust-payments.component';
import { HomeComponent } from './pages/home/home.component';
import { NewSpotorderComponent } from './pages/new-spotorder/new-spotorder.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [{
  path: '', component: LoginComponent
}, {
  path: 'home', component: MainComponent,
  children: [{
    path: '', component: HomeComponent
  }, {
    path: 'newspotorder', component: NewSpotorderComponent
  },{
    path: 'custconfirmations', component: CustConfirmationsComponent
  },{
    path: 'custpayments', component: CustPaymentsComponent
  }, {
    path: '**', component: PageNotFoundComponent
  }]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
