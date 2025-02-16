import { IsInt, IsString, IsNotEmpty, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMensagemDto {
  @ApiProperty({
    description: 'ID do chat ao qual a mensagem pertence',
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  chatId: number;

  @ApiProperty({
    description: 'Conteúdo da mensagem',
    example: 'Esta é uma nova mensagem!',
  })
  @IsString()
  @IsNotEmpty()
  conteudo: string;

  @ApiProperty({
    description: 'Data e hora de envio da mensagem, no formato ISO 8601',
    example: '2025-02-16T12:00:00Z',
  })
  @IsDateString()
  dataEnvio: string;  // A data vai ser tratada como uma string
}
