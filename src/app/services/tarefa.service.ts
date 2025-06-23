import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tarefa {
  id: number;
  descricao: string;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class TarefaService {
  private baseUrl = 'https://back-spring-todo.onrender.com/api/tarefas';

  constructor(private http: HttpClient) {}

  getTarefas(): Observable<Tarefa[]> {
  return this.http.get<Tarefa[]>(`${this.baseUrl}`, { params: { t: Date.now().toString() } });
}

  removerTarefa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  private formatarStatusParaEnum(status: string): string {
    const normalized = status
      .toUpperCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    if (normalized === 'EM ANDAMENTO') return 'EM_ANDAMENTO';
    return normalized; 
  }

  adicionarTarefa(tarefa: Omit<Tarefa, 'id'>): Observable<Tarefa> {
  const tarefaFormatada = {
    ...tarefa,
    status: this.formatarStatusParaEnum(tarefa.status),
  };
  return this.http.post<Tarefa>(this.baseUrl, tarefaFormatada);
}

  alterarStatus(id: number, status: string): Observable<Tarefa> {
    const statusParam = status
      .toUpperCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '_');
    return this.http.patch<Tarefa>(`${this.baseUrl}/${id}/status`, null, {
      params: { status: statusParam },
    });
  }
}
