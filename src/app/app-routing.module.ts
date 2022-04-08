import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReportesComponent } from './reportes/reportes.component';


const routes: Routes = [

  {path: 'home', component:HomeComponent},
  {path: 'profile', component:ProfileComponent,canActivate:[AuthGuard]},
  {path: 'reportes', component:ReportesComponent,canActivate:[AuthGuard]},
  {path: '', pathMatch:'full', redirectTo:'/home'},

  {path: 'reportes', loadChildren: () => import('./reportes/reportes.module').then(m => m.ReportesModule) },
];
/*
  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  { path: 'mantenimientos', loadChildren: () => import('./mantenimientos/mantenimientos.module').then(m => m.MantenimientosModule) }, 
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) }
  */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
