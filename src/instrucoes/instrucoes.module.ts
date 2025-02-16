import { Module } from '@nestjs/common';
import { InstrucoesService } from './instrucoes.service';
import { InstrucoesController } from './instrucoes.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [InstrucoesController],
  providers: [InstrucoesService, PrismaService],
  exports: [InstrucoesService],
})
export class InstrucoesModule {}
