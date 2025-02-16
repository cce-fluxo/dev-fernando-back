import { Module } from '@nestjs/common';
import { MedicoService } from './medico.service';
import { MedicoController } from './medico.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MedicoController],
  providers: [MedicoService, PrismaService],
  exports: [MedicoService],
})
export class MedicoModule {}
