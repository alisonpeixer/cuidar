import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PacienteCrudComponent } from './paciente/crud/paciente-crud.component';
import { PacienteListaComponent } from './paciente/lista/paciente-lista.component';
import { AnamneseListaComponent } from './anamnese/lista/anamnese-lista.component';
import { AnamneseCrudComponent } from './anamnese/crud/anamnese-crud.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
      {path: 'pacientes'                    , component: PacienteListaComponent},
      {path: 'paciente/editar-cadastro/:CID', component: PacienteCrudComponent},
      {path: 'paciente/cadastro'            , component: PacienteCrudComponent},
      {path: 'anamneses'                    , component: AnamneseListaComponent},
      {path: 'anamnese/cadastro'            , component: AnamneseCrudComponent},
      {path: 'anamnese/editar-cadastro/:CID', component: AnamneseCrudComponent},
  ] },
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
