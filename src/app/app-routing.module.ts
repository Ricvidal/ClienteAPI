import { MarcaDetalheComponent } from './marca-detalhe/marca-detalhe.component';
import { MarcaListagemComponent } from './marca-listagem/marca-listagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'marcas', component: MarcaListagemComponent },
  { path: 'marca-detalhe/:id', component: MarcaDetalheComponent },
  { path: 'marca-detalhe/new', component: MarcaDetalheComponent },
  { path: '', redirectTo: '/marcas', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
