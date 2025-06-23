import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AtualizacaoService {
  private atualizarTarefasSource = new Subject<void>();
  atualizarTarefas$ = this.atualizarTarefasSource.asObservable();

  solicitarAtualizacao() {
    this.atualizarTarefasSource.next();
  }
}
