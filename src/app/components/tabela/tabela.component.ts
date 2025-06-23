import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertaComponent } from '../alert/alert.component';
import { TarefaService, Tarefa } from '../../services/tarefa.service';
import { AtualizacaoService } from '../../services/atualizacao.service';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [CommonModule, AlertaComponent],
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent implements OnInit {
  statusOptions = ['Pendente', 'Em Andamento', 'Concluído'];
  dropdownAberto: number | null = null;
  alertaVisivel = false;
  mensagemAlerta = '';
  paginaAtual = 1;
  tarefasPorPagina = 3;
  tarefas: Tarefa[] = [];

  constructor(
    private tarefaService: TarefaService,
    private atualizacaoService: AtualizacaoService 
  ) {}

  ngOnInit() {
    this.carregarTarefas();

    
    this.atualizacaoService.atualizarTarefas$.subscribe(() => {
      this.carregarTarefas();
    });
  }

  carregarTarefas() {
    this.tarefaService.getTarefas().subscribe((tarefas) => {
      console.log('Tarefas recebidas:', tarefas);
      this.tarefas = tarefas;
    });
  }


  excluirTarefa(id: number) {
    this.tarefaService.removerTarefa(id).subscribe(() => {
      this.mensagemAlerta = 'Tarefa excluída com sucesso!';
      this.alertaVisivel = true;
      this.tarefas = this.tarefas.filter(t => t.id !== id);
      this.carregarTarefas();
      setTimeout(() => (this.alertaVisivel = false), 3000);
    });
  }

  alterarStatus(id: number, status: string) {
    this.tarefaService.alterarStatus(id, status).subscribe(() => {
      const tarefa = this.tarefas.find(t => t.id === id);
      if (tarefa) tarefa.status = status;
      this.mensagemAlerta = 'Status da Tarefa editado com sucesso!';
      this.alertaVisivel = true;
      this.carregarTarefas();
      setTimeout(() => (this.alertaVisivel = false), 3000);
    });
  }

  get tarefasPaginadas() {
    const inicio = (this.paginaAtual - 1) * this.tarefasPorPagina;
    return this.tarefas.slice(inicio, inicio + this.tarefasPorPagina);
  }

  get totalPaginas() {
    return Math.ceil(this.tarefas.length / this.tarefasPorPagina);
  }

  get paginas(): number[] {
    return Array(this.totalPaginas)
      .fill(0)
      .map((_, i) => i + 1);
  }

  irParaPagina(pagina: number) {
    this.paginaAtual = pagina;
  }

  anterior() {
    if (this.paginaAtual > 1) this.paginaAtual--;
  }

  proxima() {
    if (this.paginaAtual < this.totalPaginas) this.paginaAtual++;
  }

  toggleDropdown(id: number) {
    this.dropdownAberto = this.dropdownAberto === id ? null : id;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-toggle')) {
      this.dropdownAberto = null;
    }
  }

  formatarTextoStatus(status: string) {
  return status.replace(/_/g, ' ');
}


  formatarStatus(status: string) {
  const normalized = status
    .toLowerCase()              
    .normalize('NFD')            
    .replace(/[\u0300-\u036f]/g, '') 

  switch (normalized) {
    case 'concluido':
      return 'bg-green-500/20 text-green-900';
    case 'pendente':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-yellow-100 text-yellow-800';
  }
}

}
