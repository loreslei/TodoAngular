import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent {
  tarefas = [
    { id: 1, descricao: 'Tarefa 1', status: 'Concluído' },
    { id: 2, descricao: 'Tarefa 2', status: 'Em Andamento' },
    { id: 3, descricao: 'Tarefa 3', status: 'Pendente' },
    { id: 4, descricao: 'Tarefa 4', status: 'Pendente' },
    { id: 5, descricao: 'Tarefa 5', status: 'Em Andamento' },
    { id: 6, descricao: 'Tarefa 6', status: 'Concluído' },
    { id: 7, descricao: 'Tarefa 7', status: 'Em Andamento' },
    { id: 8, descricao: 'Tarefa 8', status: 'Pendente' },
    { id: 9, descricao: 'Tarefa 9', status: 'Pendente' },
    { id: 10, descricao: 'Tarefa 10', status: 'Concluído' }
  ];

  statusOptions = ['Pendente', 'Em Andamento', 'Concluído'];
  dropdownAberto: number | null = null;

  paginaAtual = 1;
  tarefasPorPagina = 3;

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

  excluirTarefa(id: number) {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
    if (this.paginaAtual > this.totalPaginas) {
      this.paginaAtual = this.totalPaginas;
    }
  }

  toggleDropdown(id: number) {
    this.dropdownAberto = this.dropdownAberto === id ? null : id;
  }

  alterarStatus(id: number, novoStatus: string) {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) tarefa.status = novoStatus.toLowerCase();
    this.dropdownAberto = null;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-toggle')) {
      this.dropdownAberto = null;
    }
  }

  formatarStatus(status: string) {
    const normalized = status.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    switch (normalized) {
      case 'concluido':
        return 'bg-green-500/20 text-green-900';
      case 'em andamento':
        return 'bg-yellow-100 text-yellow-800';
      case 'pendente':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
}
