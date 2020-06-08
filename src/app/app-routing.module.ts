import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { FacturasComponent } from './componentes/facturas/facturas.component';
import { FacturaComponent } from './componentes/factura/factura.component';


const routes: Routes = [
{path: 'menu', component: MenuComponent},
{path: 'facturas', component: FacturasComponent},
{path: 'factura', component: FacturaComponent},
{path: 'login', component: LoginComponent},
{path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
