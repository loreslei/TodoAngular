export interface Task {
  id: number;
  description: string;
  status: 'concluído' | 'em andamento' | 'pendente';
  isMenuOpen?: boolean;
}