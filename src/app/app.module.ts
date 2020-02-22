import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { TechnicalComponent } from './technical/technical.component';
import { FutureComponent } from './future/future.component';
import { NationalComponent } from './projects/national/national.component';
import { MapComponent } from './projects/map/map.component';
import { TapandlearnComponent } from './projects/tapandlearn/tapandlearn.component';
import { BuenoComponent } from './projects/bueno/bueno.component';
import { BlogComponent } from './projects/blog/blog.component';
import { DropdownDirective } from './header/dropDown.directive'

const appRouter: Routes = [
  { path: '',  redirectTo: '/basicinfo', pathMatch: 'full'},
  { path: 'basicinfo', component: BasicinfoComponent},
  { path: 'technical', component: TechnicalComponent},
  { path: 'future', component: FutureComponent},
  { path: 'projects', component: ProjectsComponent, children:[
    { path: 'national', component: NationalComponent },
    { path: 'map', component:MapComponent },
    { path: 'tapandlearn', component: TapandlearnComponent },
    { path: 'bueno', component: BuenoComponent },
    { path: 'blog', component: BlogComponent }
  ]}
]
//

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    BasicinfoComponent,
    TechnicalComponent,
    FutureComponent,
    NationalComponent,
    MapComponent,
    TapandlearnComponent,
    BuenoComponent,
    BlogComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
