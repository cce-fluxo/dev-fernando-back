import { Module } from '@nestjs/common';
import { EstadoService } from './estado.service';
import { EstadoController } from './estado.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EstadoController],
  providers: [EstadoService],
})
export class EstadoModule {}
