import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { DocsModule } from './docs/docs.module';

import { appRoutes } from './router/router.component';
import { EmpService } from './service/emp.service';
import { ListService } from './service/list.service';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

import { AuthguardGuard } from './authguard.guard';
import { ListResolver } from './list.resolver';
import { LoginService } from './login/login.service';
import { ViewUserComponent } from './view-user/view-user.component';
import { StarComponent } from './star/star.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PagenotfoundComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    FormvalidationComponent,
    ReactiveformComponent,
    ViewUserComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DocsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [ListResolver, EmpService,ListService,LoginService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
