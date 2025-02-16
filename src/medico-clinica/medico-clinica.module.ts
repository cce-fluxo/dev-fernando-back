import { Module } from '@nestjs/common';
import { MedicoClinicaService } from './medico-clinica.service';
import { MedicoClinicaController } from './medico-clinica.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [MedicoClinicaController],
  providers: [MedicoClinicaService, PrismaService],
})
export class MedicoClinicaModule {}
