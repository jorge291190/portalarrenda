import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  constructor(private router: Router,
              private activated: ActivatedRoute,
              private http: HttpClient) {

  }
  consulta: any;
  factura: any;
  registros: any = new Array();
  tiles: any[] = [
    {id: 1, text: 'One', cols: 1, rows: 6, color: ''},
    {id: 2, text: 'Two', cols: 3, rows: 6, color: ''},
    {id: 3, text: 'Two', cols: 1, rows: 6, color: ''}
  ];
  displayedColumns: string[] = ['cantidad', 'producto', 'unitario', 'subtotal', 'iva', 'total', 'clave'];
  dataSource;

  ngOnInit() {
    Swal.fire({
      title: 'Cargando Servicios',
      icon: 'info'
    });
    Swal.showLoading();

    this.factura = JSON.parse(localStorage.getItem('factura'));
    const credencial = {record: this.factura.record_id_};

    this.http.post('https://tciconsultoria.com/portalarrenda/servicios.php', credencial).subscribe(
      (data: any) => {
        Array.from(data.data.record, 
          (element: any) => {
          const temp = {
              cantidad: element.cantidad_f_,
              clave: element.clave_sat___layout_,
              subtotal: element.sub_total,
              iva: element.total_iva,
              total: element.importe_total,
              unitario: element.importe_unitario,
              producto: element.producto__servicio
            };
          this.registros.push(temp);
        });
        this.dataSource = new MatTableDataSource(this.registros);
        Swal.close();
      }

    );
  }

  internet(url: string) {
      window.open(url);
  }

  navegar() {
    this.router.navigateByUrl('facturas');
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
