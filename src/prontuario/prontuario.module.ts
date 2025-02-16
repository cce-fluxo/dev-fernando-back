import { Module } from '@nestjs/common';
import { ProntuarioService } from './prontuario.service';
import { ProntuarioController } from './prontuario.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProntuarioController],
  providers: [ProntuarioService, PrismaService],
  exports: [ProntuarioService],
})
export class ProntuarioModule {}
