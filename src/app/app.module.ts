import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';

import { PoTemplatesModule } from '@po-ui/ng-templates';
import { MainComponent } from './main/main.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PacienteCrudComponent } from './paciente/crud/paciente-crud.component';
import { PacienteListaComponent } from './paciente/lista/paciente-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SigninComponent,
    SignupComponent,
    PacienteCrudComponent,
    PacienteListaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoTemplatesModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
