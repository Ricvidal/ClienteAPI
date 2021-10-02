import { PerfumeService } from '../perfume.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Perfume } from '../perfume';

@Component({
  selector: 'app-perfume-listar',
  templateUrl: './perfume-listar.component.html',
  styleUrls: ['./perfume-listar.component.css']
})
export class PerfumeListarComponent implements OnInit {
  perfume: Perfume[] = [];
  perfumeSelecionado?: Perfume;

  constructor(private servico: PerfumeService, private router: Router) { }

  ngOnInit(): void {
    this.onGetPerfume();
  }

  onGetPerfume(): void {
    this.servico.getPerfumes().subscribe({
      next: (perfumes: any) => (this.perfume = perfumes),
      error: (error: any) => console.log(error),
      complete: () => console.log('finalizado')
    });
  }

  onRowSelect(event: any): void {
    this.router.navigate(['/perfume-detalhe', event.data.id]);
  }

  onNovo(event: any): void {
    this.router.navigate(['/perfume-detalhe/new']);
  }

}
