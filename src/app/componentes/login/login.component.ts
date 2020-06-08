import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tiles: any[] = [
    {id: 1, text: 'One', cols: 3, rows: 5, color: ''},
    {id: 2, text: 'Two', cols: 1, rows: 5, color: ''}
  ];
  password = '';
  usuario = '';
  constructor(private router: Router,
              private http: HttpClient) { }

  ngOnInit() {
    const valida: any = JSON.parse(localStorage.getItem('credencial'));
    if (valida) {
      this.router.navigateByUrl('menu');
    }
  }


  navegar() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });


    const credencial = {
      usuario: this.usuario,
      contrasena: this.password
    };


    this.http.post('https://tciconsultoria.com/portalarrenda/login.php', credencial).subscribe(
      (data: any) => {
          console.log(data);
          if (data.estatus) {
            Toast.fire({
              icon: 'success',
              title: 'Inicio de Sesion Correcto'
            });

            const credencial: any = {rfc: data.rfc};
            localStorage.setItem('credencial', JSON.stringify(credencial));
            this.router.navigateByUrl('menu');
          } else {
            Toast.fire({
              icon: 'error',
              title: 'Error en credenciales'
            });

          }
        });

  }

  valida() : boolean{

if(this.usuario !== '' && this.password !== ''){

  return true;
}
else{
  return false;
}
  }

}
