export class Usuario {
  id?: number;
  email: string;
  senha: string;
  nome: string;
  sobrenome: string;
  dataNasc: Date;
  telefone: string;
  foto?: string;
  medico?: object | null;
  paciente?: object | null;
  resetToken?: string | null;
  resetTokenExpiry?: Date | null;
}