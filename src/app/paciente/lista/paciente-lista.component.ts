import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-paciente-lista',
  templateUrl: './paciente-lista.component.html',
  styleUrls: ['./paciente-lista.component.css']
})
export class PacienteListaComponent implements OnInit {



  constructor(
    private route: Router,
  ) { }

  public readonly pageActions: Array<PoPageAction> = [
    { label: 'Cadastrar', action: this.goToCadastro.bind(this) }
  ];

  ngOnInit() {
  }


  goToCadastro(): void {
    this.route.navigateByUrl('/paciente/cadastro');
  }
}
