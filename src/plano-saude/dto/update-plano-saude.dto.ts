import { IsOptional, IsString } from 'class-validator';

export class UpdatePlanoSaudeDto {
  @IsOptional()
  @IsString()
  tipo?: string;
}
