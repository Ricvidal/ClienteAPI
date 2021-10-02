import { MarcaService } from '../marca.service';
import { Component, OnInit } from '@angular/core';
import { Marca } from '../marca';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-marca-detalhe',
  templateUrl: './marca-detalhe.component.html',
  styleUrls: ['./marca-detalhe.component.css']
})
export class MarcaDetalheComponent implements OnInit {

  constructor(private servico: MarcaService, private router: Router,
    private route: ActivatedRoute, private formBuilder: FormBuilder) { }


  mensagemErro = '';
  id = '0';
  isNew = false;

  meuForm = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(3)]]
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
          this.servico.getMarcaById(id).subscribe({
            next: (marca: Marca) => {
              this.meuForm.patchValue(marca);
            },
            error: (error: any) => {
              console.log(error);
              if (error.status === 404) {
                this.mensagemErro = 'Erro: registro não encontrado';
              } else {
                this.mensagemErro = 'Erro desconhecido';
              }
            },
            complete: () => console.log('Marca carregada')
          });
        }
      }
    );
  }

  onAtualizar(): void {
    this.servico.updateMarca(this.id, this.meuForm.value).subscribe(
      retorno => this.router.navigate(['/marcas'])
    );
  }

  onIncluir(): void {
    this.servico.addMarca(this.meuForm.value).subscribe(
      retorno => this.router.navigate(['/marcas'])
    );
  }

  onExcluir(): void {
    this.servico.deleteMarca(this.id).subscribe(
      retorno => this.router.navigate(['/marcas'])
    );
  }

  onCancelar(): void {
    this.router.navigate(['/marcas']);
  }

}
