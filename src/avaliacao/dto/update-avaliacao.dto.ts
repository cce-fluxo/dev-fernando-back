import { PartialType } from '@nestjs/mapped-types';
import { CreateAvaliacaoDto } from './create-avaliacao.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAvaliacaoDto extends PartialType(CreateAvaliacaoDto) {
  @ApiProperty({ description: 'Conteúdo atualizado da avaliação', example: 'Consulta muito boa, recomendo!' })
  conteudo?: string;
}
