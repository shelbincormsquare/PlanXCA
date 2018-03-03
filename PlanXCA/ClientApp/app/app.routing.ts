import { SupplierLayoutComponent } from './components/_shared/layouts/supplier-layout/supplier-layout.component';
import { BuyerLayoutComponent } from './components/_shared/layouts/buyer-layout/buyer-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectFormComponent } from './components/projects/project-form/project-form.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';




const appRoutes: Routes = [

    // RouterModule.forRoot([
    //     { path: '', redirectTo: 'home', pathMatch: 'full' },
    //     { path: 'projects/new', component: ProjectFormComponent },
    //     { path: 'projects/list', component: ProjectListComponent },
    //     { path: 'projects/:id', component: ProjectFormComponent},
    //     { path: 'home', component: HomeComponent },
    //     { path: 'counter', component: CounterComponent },
    //     { path: 'fetch-data', component: FetchDataComponent },
    //     { path: '**', redirectTo: 'home' }
    //Site routes goes here 
    {
        path: '',
        component: BuyerLayoutComponent,
        children: [
            { path: 'projects/new', component: ProjectFormComponent },
            { path: 'projects/list', component: ProjectListComponent },
            { path: 'projects/:id', component: ProjectFormComponent }
        ]
    },

    // App routes goes here here
    {
        path: '',
        component: SupplierLayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent }
        ]
    },

    // //no layout routes
    // {
    //     path: 'login',

    //     component: LoginComponent
    // },
    // { path: 'register', component: RegisterComponent },
    // // otherwise redirect to home
    // { path: '*', redirectTo: '' }
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);


