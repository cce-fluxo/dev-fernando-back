import { IsInt, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateMedicoClinicaDto {
  
  @ApiProperty({
    description: 'ID do médico',
    example: 1,
  })
  @IsInt()
  medicoId: number;

  @ApiProperty({
    description: 'ID da clínica',
    example: 101,
  })
  @IsInt()
  clinicaId: number;

  @ApiProperty({
    description: 'ID do plano de saúde (opcional)',
    example: 200,
    required: false,
  })
  @IsOptional()
  @IsInt()
  planoId?: number;

  @ApiProperty({
    description: 'Código de associação do médico à clínica (opcional)',
    example: 'AB123',
    required: false,
  })
  @IsOptional()
  @IsString()
  codigo?: string;
}
