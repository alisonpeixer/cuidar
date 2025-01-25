import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PacienteCrudComponent } from './paciente/crud/paciente-crud.component';
import { PacienteListaComponent } from './paciente/lista/paciente-lista.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
      {path: 'pacientes', component: PacienteListaComponent},
      {path: 'paciente/CID', component: PacienteCrudComponent},
      {path: 'paciente/cadastro', component: PacienteCrudComponent},
  ] },
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
