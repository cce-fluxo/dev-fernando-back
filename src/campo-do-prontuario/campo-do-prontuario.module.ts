import { Module } from '@nestjs/common';
import { CampoDoProntuarioService } from './campo-do-prontuario.service';
import { CampoDoProntuarioController } from './campo-do-prontuario.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CampoDoProntuarioController],
  providers: [CampoDoProntuarioService, PrismaService],
  exports: [CampoDoProntuarioService],
})
export class CampoDoProntuarioModule {}
