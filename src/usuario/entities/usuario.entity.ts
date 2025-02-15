export class Usuario {
  id?: number;
  email: string;
  senha: string;
  nome: string;
  sobrenome: string;
  dataNasc: Date;
  telefone: string;
  foto?: string;
  medico?: object | null; // Relacionamento com médico
  paciente?: object | null; // Relacionamento com paciente
}
