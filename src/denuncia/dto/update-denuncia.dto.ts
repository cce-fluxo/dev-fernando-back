import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDenunciaDto } from './create-denuncia.dto';

export class UpdateDenunciaDto extends PartialType(CreateDenunciaDto) {}
