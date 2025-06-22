import { Component } from '@angular/core';
import { AlertaComponent } from "../alert/alert.component";
import { NgIf } from '@angular/common';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-inputs',
  imports: [AlertaComponent, NgIf],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css',
})
export class InputsComponent {

  descricao = '';
  status = 'Pendente';

  constructor(private tarefaService: TarefaService) {}

  adicionarTarefa(event: SubmitEvent) {
    if (!this.descricao.trim()) return;

    this.tarefaService.adicionarTarefa({
      id: Date.now(), 
      descricao: this.descricao,
      status: this.status.toLowerCase()
    });

    this.descricao = '';
    this.status = 'Pendente';
    this.mensagemAlerta = 'Tarefa adicionada com sucesso!';
    this.alertaVisivel = true;
    setTimeout(() => (this.alertaVisivel = false), 3000);
    event.preventDefault();
  }

  alertaVisivel = false;
  mensagemAlerta = '';

}
