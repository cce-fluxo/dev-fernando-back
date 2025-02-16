import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Endereço')
@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  @ApiOperation({ summary: 'Cria uma novo endereço' })
  @Post()
  create(@Body() createEnderecoDto: CreateEnderecoDto) {
    return this.enderecoService.create(createEnderecoDto);
  }

  @ApiOperation({ summary: 'Recupera todos os endereços' })
  @Get()
  findAll() {
    return this.enderecoService.findAll();
  }

  @ApiOperation({ summary: 'Recupera um endereço específico por ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enderecoService.findOne(+id);
  }

  @ApiOperation({ summary: 'Atualiza um endereço existente por ID' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnderecoDto: UpdateEnderecoDto) {
    return this.enderecoService.update(+id, updateEnderecoDto);
  }

  @ApiOperation({ summary: 'Remove um endereço pelo ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enderecoService.remove(+id);
  }
}
