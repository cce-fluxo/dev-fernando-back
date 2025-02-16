import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Chat')
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @ApiOperation({ summary: 'Criar um novo chat' })
  @Post()
  async create(@Body() createChatDto: CreateChatDto) {
    return this.chatService.create(createChatDto);
  }

  @ApiOperation({ summary: 'Listar todos os chats' })
  @Get()
  async findAll() {
    return this.chatService.findAll();
  }

  @ApiOperation({ summary: 'Buscar um chat por ID' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.chatService.findOne(Number(id));
  }

  @ApiOperation({ summary: 'Atualizar um chat' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatService.update(Number(id), updateChatDto);
  }

  @ApiOperation({ summary: 'Remover um chat' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.chatService.remove(Number(id));
  }
}
