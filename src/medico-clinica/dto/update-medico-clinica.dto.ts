import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateMedicoClinicaDto {
  @IsOptional()
  @IsInt()
  medicoId?: number;

  @IsOptional()
  @IsInt()
  clinicaId?: number;

  @IsOptional()
  @IsInt()
  planoId?: number;

  @IsOptional()
  @IsString()
  codigo?: string;
}
