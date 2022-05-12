import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonInterceptor } from './Interceptors/common.interceptor';

// import { InternDashboardComponent } from './components/intern-dashboard/intern-dashboard.component';
// import { DashboardRootComponent } from './components/dashboard-root/dashboard-root.component';
// import { FteDashboardComponent } from './components/fte-dashboard/fte-dashboard.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:CommonInterceptor,
    multi:true
  }]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
