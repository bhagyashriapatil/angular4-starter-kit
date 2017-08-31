import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { ClientComponent } from './client/client.component';
import { DocsComponent } from './doc/docs.component';
import { AuthguardGuard } from '../authguard.guard'; 

export const routes: Routes = [
    {
        path: "docs",
        component: DocsComponent,
        canActivate: [AuthguardGuard],
        children: [
            {
                path: '',
                canActivateChild: [AuthguardGuard],
                children: [{
                    path: "",
                    component: StaffComponent
                },
                {
                    path: "client",
                    component: ClientComponent
                }]
            }
            
        ]

    }
]

export const DocRoutingModule = RouterModule.forRoot(routes);