import { BuyerLayoutComponent } from './components/_shared/layouts/buyer-layout/buyer-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import {
    MatButtonModule, MatSlideToggleModule, MatInputModule, MatFormFieldModule,
    MatSelectModule, MatTableModule
} from '@angular/material';
import { ProjectService } from './services/project.service';
import { ProjectFormComponent } from './components/projects/project-form/project-form.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { routing } from './app.routing';
import { PublicLayoutComponent } from './components/_shared/layouts/public-layout/public-layout.component';
import { SupplierLayoutComponent } from './components/_shared/layouts/supplier-layout/supplier-layout.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        ProjectFormComponent,
        ProjectListComponent,
        PublicLayoutComponent,
        BuyerLayoutComponent,
        SupplierLayoutComponent


    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        routing
        // RouterModule.forRoot([
        //     { path: '', redirectTo: 'home', pathMatch: 'full' },
        //     { path: 'projects/new', component: ProjectFormComponent },
        //     { path: 'projects/list', component: ProjectListComponent },
        //     { path: 'projects/:id', component: ProjectFormComponent},
        //     { path: 'home', component: HomeComponent },
        //     { path: 'counter', component: CounterComponent },
        //     { path: 'fetch-data', component: FetchDataComponent },
        //     { path: '**', redirectTo: 'home' }
        // ])
    ],
    providers: [
        ProjectService
    ]
})
export class AppModuleShared {
}
