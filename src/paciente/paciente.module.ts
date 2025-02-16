import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PacienteController],
  providers: [PacienteService, PrismaService],
  exports: [PacienteService],
})
export class PacienteModule {}
