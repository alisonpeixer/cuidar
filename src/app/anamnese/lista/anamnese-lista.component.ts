import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageAction } from '@po-ui/ng-components';
import { PacienteService } from '../../paciente/service/paciente.service';

@Component({
  selector: 'app-anamnese-lista',
  templateUrl: './anamnese-lista.component.html',
  styleUrl: './anamnese-lista.component.css'
})
export class AnamneseListaComponent {

  public readonly pageActions: Array<PoPageAction> = [
    { label: 'Cadastrar', action: this.goToCadastro.bind(this) }
  ];


  constructor(
   private route: Router
 ) { }


  goToCadastro(): void {
    this.route.navigateByUrl('/anamnese/cadastro');
  }
}
