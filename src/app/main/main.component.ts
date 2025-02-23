import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home' },
    { label: 'Pacientes',
      icon: 'an-user',
      subItems: [
        { label: 'Cadastrar', link: '/paciente/cadastro' },
        { label: 'Listar', link: '/pacientes' },
    ] },
  ];

  constructor() { }

  ngOnInit() {
  }

}
