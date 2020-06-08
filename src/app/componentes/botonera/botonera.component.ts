import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  regresar() {
    window.history.back();
  }

  cerrar(){
    localStorage.removeItem('factura');
    localStorage.removeItem('credencial');

    this.router.navigateByUrl('login');
  }

}
