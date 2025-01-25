import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home' },
    { label: 'Pacientes', link: '/pacientes' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
