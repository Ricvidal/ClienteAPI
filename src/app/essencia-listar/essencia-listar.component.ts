  import { EssenciaService } from '../essencia.service';
  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { Essencia } from '../essencia';
  
  @Component({
    selector: 'app-essencia-listar',
    templateUrl: './essencia-listar.component.html',
    styleUrls: ['./essencia-listar.component.css']
  })
  export class EssenciaListarComponent implements OnInit {
    essencias: Essencia[] = [];
    essenciaSelecionada?: Essencia;
  
    constructor(private servico: EssenciaService, private router: Router) { }
  
    ngOnInit(): void {
      this.onGetEssencias();
    }
  
    onGetEssencias(): void {
      this.servico.getEssencias().subscribe({
        next: (essencias: any) => (this.essencias = essencias),
        error: (error: any) => console.log(error),
        complete: () => console.log('finalizado')
      });
    }
  
    onRowSelect(event: any): void {
      this.router.navigate(['/essencia-detalhe', event.data.id]);
    }
  
    onNovo(event: any): void {
      this.router.navigate(['/essencia-detalhe/new']);
    }
  
  }
  
