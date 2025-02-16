import { Module } from '@nestjs/common';
import { MensagemService } from './mensagem.service';
import { MensagemController } from './mensagem.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MensagemController],
  providers: [MensagemService, PrismaService],
  exports: [MensagemService],
})
export class MensagemModule {}
