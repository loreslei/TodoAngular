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
  private baseUrl = "https://back-spring-todo.onrender.com/api/tarefas";

  constructor(private http: HttpClient) {}

  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(`${this.baseUrl}`);
  }

  adicionarTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(`${this.baseUrl}`, tarefa);
  }

  alterarStatus(id: number, status: string): Observable<Tarefa> {
    return this.http.put<Tarefa>(`${this.baseUrl}/${id}`, { status });
  }

  removerTarefa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}


