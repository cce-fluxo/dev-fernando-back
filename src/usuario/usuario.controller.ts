import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
// import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuário')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @ApiOperation({
    summary: 'Rota para criar um novo usuário no sistema',
  })

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }
  
  @ApiOperation({
    summary: 'Listar todos os usuários',
  })

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @ApiOperation({
    summary: 'Buscar um usuário por ID',
  })

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @ApiOperation({
    summary: 'Atualizar informações do usuário',
  })

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @ApiOperation({
    summary: 'Remover um usuário',
  })

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
