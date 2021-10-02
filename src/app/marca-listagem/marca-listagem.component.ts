import { MarcaService } from '../marca.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marca } from '../marca';

@Component({
  selector: 'app-marca-listagem',
  templateUrl: './marca-listagem.component.html',
  styleUrls: ['./marca-listagem.component.css'],
})
export class MarcaListagemComponent implements OnInit {
  marca: Marca[] = [];
  marcaSelecionada?: Marca;

  constructor(private servico: MarcaService, private router: Router) { }

  ngOnInit(): void {
    this.onGetMarca();
  }

  onGetMarca(): void {
    this.servico.getMarcas().subscribe({
      next: (marcas: any) => (this.marca = marcas),
      error: (error: any) => console.log(error),
      complete: () => console.log('finalizado')
    });
  }

  onRowSelect(event: any): void {
    this.router.navigate(['/marca-detalhe', event.data.id]);
  }

  onNovo(event: any): void {
    this.router.navigate(['/marca-detalhe/new']);
  }

}
