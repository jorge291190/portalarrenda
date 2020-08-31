import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

botones: any  = [
  {texto: 'Consulta Facturas',
    ruta: 'facturas'},
    {texto: 'Notas de Credito',
    ruta: 'notas'},
    {texto: 'Complementos de Pago',
    ruta: 'pagos'},
    {texto: 'Poliza de Seguro',
    ruta: 'seguros'}
];

tiles: any[] = [
  {id: 1, text: 'One', cols: 3, rows: 6, color: ''},
  {id: 2, text: 'Two', cols: 1, rows: 6, color: ''}
];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegar(ruta: string) {
  this.router.navigateByUrl(ruta);

  }

  
}
