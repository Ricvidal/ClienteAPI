import { EssenciaService } from '../essencia.service';
import { Component, OnInit } from '@angular/core';
import { Essencia } from '../essencia';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-essencia-detalhe',
  templateUrl: './essencia-detalhe.component.html',
  styleUrls: ['./essencia-detalhe.component.css']
})
export class EssenciaDetalheComponent implements OnInit {

  constructor(private servico: EssenciaService, private router: Router,
    private route: ActivatedRoute, private formBuilder: FormBuilder) { }


  mensagemErro = '';
  id = '0';
  isNew = false;

  meuForm = this.formBuilder.group({
    descricao: ['', [Validators.required, Validators.minLength(3)]]
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
          this.servico.getEssenciaById(id).subscribe({
            next: (essencia: Essencia) => {
              this.meuForm.patchValue(essencia);
            },
            error: (error: any) => {
              console.log(error);
              if (error.status === 404) {
                this.mensagemErro = 'Erro: registro não encontrado';
              } else {
                this.mensagemErro = 'Erro desconhecido';
              }
            },
            complete: () => console.log('Essencia carregada')
          });
        }
      }
    );
  }

  onAtualizar(): void {
    this.servico.updateEssencia(this.id, this.meuForm.value).subscribe(
      retorno => this.router.navigate(['/essencias'])
    );
  }

  onIncluir(): void {
    this.servico.addEssencia(this.meuForm.value).subscribe(
      retorno => this.router.navigate(['/essencias'])
    );
  }

  onExcluir(): void {
    this.servico.deleteEssencia(this.id).subscribe(
      retorno => this.router.navigate(['/essencias'])
    );
  }

  onCancelar(): void {
    this.router.navigate(['/essencias']);
  }
}
