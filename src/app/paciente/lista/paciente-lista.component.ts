import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageAction, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { Paciente, PacienteLista } from '../interface/paciente';
import { PacienteService } from '../service/paciente.service';

@Component({
  selector: 'app-paciente-lista',
  templateUrl: './paciente-lista.component.html',
  styleUrls: ['./paciente-lista.component.css']
})
export class PacienteListaComponent implements OnInit {

  dadosTabelaPrincipal: Array<Paciente> = [];

  public readonly tabelaPrincipalColumns: Array<PoTableColumn> = [

    { property: 'codigo', label: 'Código' },
    { property: 'nomeCompleto', label: 'Nome Completo' },
    { property: 'genero', label: 'Gênero' },
    { property: 'dataNascimento', label: 'Data de Nascimento', type: 'dateTime', format: 'dd/MM/yyyy' },
    { property: 'dataAdmissao', label: 'Data de Admissão', type: 'dateTime',format: 'dd/MM/yyyy' },
  ];

  public readonly tabelaPrincipalActions: Array<PoTableAction> = [
    { icon: 'po-icon-edit', label: '', action:  this.goToEdicao.bind(this) },
  ];

  constructor(
    private route: Router,
    private pacienteService: PacienteService
  ) { }

  public readonly pageActions: Array<PoPageAction> = [
    { label: 'Cadastrar', action: this.goToCadastro.bind(this) }
  ];

  ngOnInit() {
    this.getDados();
  }


  getDados(): void {
    this.pacienteService.listar().subscribe((res)=>{
      this.dadosTabelaPrincipal = res.items;

    });
  }

  goToEdicao(item: PacienteLista): void {
    this.route.navigate(['paciente', 'editar-cadastro', item.codigo]);
  }

  goToCadastro(): void {
    this.route.navigateByUrl('/paciente/cadastro');
  }
}
