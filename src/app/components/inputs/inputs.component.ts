import { Component } from '@angular/core';
import { AlertaComponent } from '../alert/alert.component';
import { NgIf } from '@angular/common';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [AlertaComponent, NgIf],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css',
})
export class InputsComponent {
  alertaVisivel = false;
  mensagemAlerta = '';

  constructor(private tarefaService: TarefaService) {}

  adicionarTarefa(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const descricaoInput = form.elements.namedItem('tarefa') as HTMLInputElement;
    const statusSelect = form.elements.namedItem('status') as HTMLSelectElement;

    const descricao = descricaoInput.value.trim();
    const status = statusSelect.value.toLowerCase();

    if (!descricao) return;

    const novaTarefa = { id: 0, descricao, status }; // ID será ignorado pelo back

    this.tarefaService.adicionarTarefa(novaTarefa).subscribe(() => {
      this.mensagemAlerta = 'Tarefa adicionada com sucesso!';
      this.alertaVisivel = true;
      descricaoInput.value = '';
      statusSelect.value = 'Pendente';
      setTimeout(() => (this.alertaVisivel = false), 3000);
    });
  }
}
