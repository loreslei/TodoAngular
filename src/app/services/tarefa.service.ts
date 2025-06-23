import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Tarefa {
  id: number;
  descricao: string;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class TarefaService {
  private tarefasIniciais: Tarefa[] = [
    { id: 1, descricao: 'Tarefa 1', status: 'pendente' },
    { id: 2, descricao: 'Tarefa 2', status: 'em andamento' },
    { id: 3, descricao: 'Tarefa 3', status: 'concluído' }
  ];

  private tarefasSubject = new BehaviorSubject<Tarefa[]>(this.tarefasIniciais);
  tarefas$ = this.tarefasSubject.asObservable();

  adicionarTarefa(tarefa: Tarefa) {
    const tarefasAtualizadas = [...this.tarefasSubject.value, tarefa];
    this.tarefasSubject.next(tarefasAtualizadas);
  }

  removerTarefa(id: number) {
    const atualizadas = this.tarefasSubject.value.filter(t => t.id !== id);
    this.tarefasSubject.next(atualizadas);
  }

  alterarStatus(id: number, status: string) {
    const atualizadas = this.tarefasSubject.value.map(t =>
      t.id === id ? { ...t, status } : t
    );
    this.tarefasSubject.next(atualizadas);
  }
}
