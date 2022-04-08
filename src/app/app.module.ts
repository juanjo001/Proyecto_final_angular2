import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthModule } from '@auth0/auth0-angular';

import { HttpClientModule } from '@angular/common/http';

import { ListadoComponent } from './components/listado/listado.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    BusquedaComponent,
    ListadoComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-hkdj0g7n.us.auth0.com',
      clientId: 'ngBFiJOiIUyE7myGk6Jt3BgpJeue1B1C'
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
