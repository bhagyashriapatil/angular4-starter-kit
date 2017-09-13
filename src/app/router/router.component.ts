import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { AboutComponent } from '../about/about.component';
import { LoginComponent } from '../login/login.component';
import { DocsComponent } from '../docs/doc/docs.component';
import { SignupComponent } from '../signup/signup.component';

import { TooltipComponent } from '../ngx-bootstrap-demo/tooltip/tooltip.component';
import { ModalComponent } from '../ngx-bootstrap-demo/modal/modal.component';
import { TypeheadComponent } from '../ngx-bootstrap-demo/typehead/typehead.component';
import { DatepickerComponent } from '../ngx-bootstrap-demo/datepicker/datepicker.component';
import { CollapseComponent } from '../ngx-bootstrap-demo/collapse/collapse.component';
import { CarouselComponent } from '../ngx-bootstrap-demo/carousel/carousel.component';
import { AccordionComponent } from '../ngx-bootstrap-demo/accordion/accordion.component';
import { AlertsComponent } from '../ngx-bootstrap-demo/alerts/alerts.component';
import { ButtonComponent } from '../ngx-bootstrap-demo/button/button.component';
import { DropdownComponent } from '../ngx-bootstrap-demo/dropdown/dropdown.component';
import { PaginationComponent } from '../ngx-bootstrap-demo/pagination/pagination.component';
import { ProgressbarComponent } from '../ngx-bootstrap-demo/progressbar/progressbar.component';
import { SortableComponent } from '../ngx-bootstrap-demo/sortable/sortable.component';
import { TabsComponent } from '../ngx-bootstrap-demo/tabs/tabs.component';

import { FormvalidationComponent } from '../formvalidation/formvalidation.component';
import { ReactiveformComponent } from '../reactiveform/reactiveform.component';
import { ViewUserComponent } from '../view-user/view-user.component';
import { AuthguardGuard } from '../authguard.guard'; 
import { ListResolver } from '../list.resolver';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, resolve: {user: ListResolver} },
  { path: 'home', component: HomeComponent, canActivate: [AuthguardGuard] },
  { path: 'signup', component: SignupComponent},
  { path: 'viewUser/:id', component: ViewUserComponent},
  { path: 'fomvalidation', component: FormvalidationComponent, canActivate: [AuthguardGuard] },
  { path: 'reactiveform', component: ReactiveformComponent, canActivate: [AuthguardGuard] },

  { path: 'tooltip', component: TooltipComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'typehead', component: TypeheadComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'collapse', component: CollapseComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'alert', component: AlertsComponent },
  { path: 'ngxbutton', component: ButtonComponent },
  { path: 'ngxdropdown', component: DropdownComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'progressbar', component: ProgressbarComponent },
  { path: 'sortable', component: SortableComponent },
  { path: 'tabs', component: TabsComponent },
  
  { path: 'about/:id', component: AboutComponent, canActivate: [AuthguardGuard] },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];
//When making a redirect it is important to tell the router how to match the URL.
//There are two options for that - full and prefix  matches URL prefixed with the redirect path.
export const routing = RouterModule.forRoot(appRoutes)