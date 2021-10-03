import { PerfumeService } from '../perfume.service';
import { Component, OnInit } from '@angular/core';
import { Perfume } from '../perfume';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfume-detalhe',
  templateUrl: './perfume-detalhe.component.html',
  styleUrls: ['./perfume-detalhe.component.css']
})
export class PerfumeDetalheComponent implements OnInit {

  constructor(private servico: PerfumeService, private router: Router,
    private route: ActivatedRoute, private formBuilder: FormBuilder) { }


  mensagemErro = '';
  id = '0';
  isNew = false;

  meuForm = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    marca: ['', [Validators.required, Validators.minLength(3)]]
  });

  ngOnInit(): void {
    this.mensagemErro = '';
    this.route.paramMap.subscribe(
      (retorno: ParamMap) => {
        const id = retorno.get('id') || '0';
        this.id = id;
        if (id === 'new') {
          this.isNew = true;
        } else {
          this.servico.getPerfumeById(id).subscribe({
            next: (perfume: Perfume) => {
              this.meuForm.patchValue(perfume);
            },
            error: (error: any) => {
              console.log(error);
              if (error.status === 404) {
                this.mensagemErro = 'Erro: registro não encontrado';
              } else {
                this.mensagemErro = 'Erro desconhecido';
              }
            },
            complete: () => console.log('Perfume carregado')
          });
        }
      }
    );
  }

  onAtualizar(): void {
    this.servico.updatePerfume(this.id, this.meuForm.value).subscribe(
      retorno => this.router.navigate(['/Perfumes'])
    );
  }

  onIncluir(): void {
    this.servico.addPerfume(this.meuForm.value).subscribe(
      retorno => this.router.navigate(['/perfumes'])
    );
  }

  onExcluir(): void {
    this.servico.deletePerfume(this.id).subscribe(
      retorno => this.router.navigate(['/perfumes'])
    );
  }

  onCancelar(): void {
    this.router.navigate(['/perfumes']);
  }

}

