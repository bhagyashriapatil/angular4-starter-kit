import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// import { NgxModule } from './ngx/ngx.module';
import { PopoverModule, TooltipModule, ModalModule, TypeaheadModule, CollapseModule,
  CarouselModule, AccordionModule, AlertModule, ButtonsModule, BsDropdownModule, PaginationModule,
  ProgressbarModule, SortableModule, TabsModule } from 'ngx-bootstrap';

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
import { TooltipComponent } from './ngx-bootstrap-demo/tooltip/tooltip.component';
import { ModalComponent } from './ngx-bootstrap-demo/modal/modal.component';
import { ModalContentComponent } from './ngx-bootstrap-demo/modal/modal-content-component';
import { TypeheadComponent } from './ngx-bootstrap-demo/typehead/typehead.component';
import { DatepickerComponent } from './ngx-bootstrap-demo/datepicker/datepicker.component';
import { CollapseComponent } from './ngx-bootstrap-demo/collapse/collapse.component';
import { CarouselComponent } from './ngx-bootstrap-demo/carousel/carousel.component';
import { AccordionComponent } from './ngx-bootstrap-demo/accordion/accordion.component';
import { AlertsComponent } from './ngx-bootstrap-demo/alerts/alerts.component';
import { ButtonComponent } from './ngx-bootstrap-demo/button/button.component';
import { DropdownComponent } from './ngx-bootstrap-demo/dropdown/dropdown.component';
import { PaginationComponent } from './ngx-bootstrap-demo/pagination/pagination.component';
import { ProgressbarComponent } from './ngx-bootstrap-demo/progressbar/progressbar.component';
import { SortableComponent } from './ngx-bootstrap-demo/sortable/sortable.component';
import { TabsComponent } from './ngx-bootstrap-demo/tabs/tabs.component';


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
    StarComponent,
    TooltipComponent,
    ModalContentComponent,
    ModalComponent,
    TypeheadComponent,
    DatepickerComponent,
    CollapseComponent,
    CarouselComponent,
    AccordionComponent,
    AlertsComponent,
    ButtonComponent,
    DropdownComponent,
    PaginationComponent,
    ProgressbarComponent,
    SortableComponent,
    TabsComponent
  ],
  // when we use external component
  // so it compile by angular so we nee to declare that compnent using entryComponent
  entryComponents: [
    ModalContentComponent
  ],
  imports: [
    BrowserModule,

    // NgxModule,
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),

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
