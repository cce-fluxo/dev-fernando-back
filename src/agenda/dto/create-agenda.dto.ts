import { IsInt, IsString, IsISO8601 } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateAgendaDto {
  @ApiProperty({
    example: 1,
    description: 'ID do médico responsável pela agenda',
  })
  @IsInt()
  medicoId: number;

  @ApiProperty({
    example: 1,
    description: 'ID da clínica onde a consulta será realizada',
  })
  @IsInt()
  clinicaId: number;

  @ApiProperty({
    example: '2025-02-16',
    description: 'Data de início da agenda (formato ISO 8601)',
  })
  @IsISO8601()
  dataInicio: string;

  @ApiProperty({
    example: '2025-02-16',
    description: 'Data de término da agenda (formato ISO 8601)',
  })
  @IsISO8601()
  dataTermino: string;

  @ApiProperty({
    example: '2025-02-16T08:00:00.000Z',
    description: 'Hora de início da agenda (formato ISO 8601)',
  })
  @IsISO8601()
  horaInicio: string;

  @ApiProperty({
    example: '2025-02-16T17:00:00.000Z',
    description: 'Hora de término da agenda (formato ISO 8601)',
  })
  @IsISO8601()
  horaTermino: string;

  @ApiProperty({
    example: 'disponível',
    description: 'Status da agenda (exemplo: disponível, indisponível, reservado)',
  })
  @IsString()
  status: string;
}
