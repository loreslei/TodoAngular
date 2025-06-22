import { Component } from '@angular/core';
import { AlertaComponent } from "../alert/alert.component";

@Component({
  selector: 'app-inputs',
  imports: [AlertaComponent],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css',
})
export class InputsComponent {
  alertaVisivel = false;
  mensagemAlerta = '';

  adicionarTarefa() {
    this.mensagemAlerta = 'Tarefa adicionada com sucesso!';
    this.alertaVisivel = true;
    setTimeout(() => (this.alertaVisivel = false), 3000);
  }
}
