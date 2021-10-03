import { MarcaDetalheComponent } from './marca-detalhe/marca-detalhe.component';
import { MarcaListagemComponent } from './marca-listagem/marca-listagem.component';
import { EssenciaDetalheComponent } from './essencia-detalhe/essencia-detalhe.component';
import { EssenciaListarComponent } from './essencia-listar/essencia-listar.component';
import { PerfumeDetalheComponent } from './perfume-detalhe/perfume-detalhe.component';
import { PerfumeListarComponent } from './perfume-listar/perfume-listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'marcas', component: MarcaListagemComponent },
  { path: 'marca-detalhe/:id', component: MarcaDetalheComponent },
  { path: 'marca-detalhe/new', component: MarcaDetalheComponent },
  { path: 'essencias', component: EssenciaListarComponent },
  { path: 'essencia-detalhe/:id', component: EssenciaDetalheComponent },
  { path: 'essencia-detalhe/new', component: EssenciaDetalheComponent },
  { path: 'perfumes', component: PerfumeListarComponent },
  { path: 'perfume-detalhe/:id', component: PerfumeDetalheComponent },
  { path: 'perfume-detalhe/new', component: PerfumeDetalheComponent },
  { path: '', redirectTo: '/marcas', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
