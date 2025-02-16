import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClinicaDto {
  @ApiProperty({ 
    example: 'Clínica Saúde Total', 
    description: 'Nome da clínica' 
  })
  @IsString()
  nome: string;

  @ApiProperty({ 
    example: 1, 
    description: 'ID do endereço da clínica' 
  })
  @IsInt()
  enderecoId: number;
}
