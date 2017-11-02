import { register } from 'ts-node/dist';
import { Route, RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { EditTransactionComponent } from './components/edit-transaction/edit-transaction.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { environment } from '../environments/environment';
import { TransactionService } from './services/transaction.service';

// Create Routes
const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TransactionsComponent,
    TransactionDetailsComponent,
    AddTransactionComponent,
    EditTransactionComponent,
    NavbarComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [
    AngularFireDatabase,
    AngularFireDatabaseModule,
    TransactionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
