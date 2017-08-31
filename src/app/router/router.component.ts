import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { AboutComponent } from '../about/about.component';
import { LoginComponent } from '../login/login.component';
import { DocsComponent } from '../docs/doc/docs.component';
import { SignupComponent } from '../signup/signup.component';
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