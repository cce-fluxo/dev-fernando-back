import { Module } from '@nestjs/common';
import { ClinicaService } from './clinica.service';
import { ClinicaController } from './clinica.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ClinicaController],
  providers: [ClinicaService],
})
export class ClinicaModule {}
