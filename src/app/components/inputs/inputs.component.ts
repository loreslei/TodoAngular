import { Component } from '@angular/core';
import { AlertaComponent } from '../alert/alert.component';
import { NgIf } from '@angular/common';
import { TarefaService } from '../../services/tarefa.service';
import { AtualizacaoService } from '../../services/atualizacao.service'; 

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [AlertaComponent, NgIf],
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'], 
})
export class InputsComponent {
  alertaVisivel = false;
  mensagemAlerta = '';

  constructor(
    private tarefaService: TarefaService,
    private atualizacaoService: AtualizacaoService 
  ) {}

  adicionarTarefa(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const descricaoInput = form.elements.namedItem('tarefa') as HTMLInputElement;
    const statusSelect = form.elements.namedItem('status') as HTMLSelectElement;

    const descricao = descricaoInput.value.trim();
    const status = statusSelect.value;

    if (!descricao) return;

    const novaTarefa = { descricao, status };

    this.tarefaService.adicionarTarefa(novaTarefa).subscribe(
      () => {
        this.mensagemAlerta = 'Tarefa adicionada com sucesso!';
        this.alertaVisivel = true;
        descricaoInput.value = '';
        statusSelect.value = 'PENDENTE';

        
        this.atualizacaoService.solicitarAtualizacao();
        
        setTimeout(() => {
          this.alertaVisivel = false;
        }, 3000);
      },
      (err) => {
        this.mensagemAlerta = 'Erro ao adicionar tarefa.';
        this.alertaVisivel = true;
        setTimeout(() => (this.alertaVisivel = false), 3000);
        console.error(err);
      }
    );
  }
}
