import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { FacturasComponent } from './componentes/facturas/facturas.component';
import { FacturaComponent } from './componentes/factura/factura.component';
import { NotascreditoComponent } from './componentes/notascredito/notascredito.component';
import { PagosComponent } from './componentes/pagos/pagos.component';
import { SegurosComponent } from './componentes/seguros/seguros.component';


const routes: Routes = [
{path: 'menu', component: MenuComponent},
{path: 'pagos', component: PagosComponent},
{path: 'facturas', component: FacturasComponent},
{path: 'seguros', component: SegurosComponent},
{path: 'factura', component: FacturaComponent},
{path: 'login', component: LoginComponent},
{path: 'notas', component: NotascreditoComponent},
{path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
