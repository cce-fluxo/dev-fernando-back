import { Module } from '@nestjs/common';
import { BairroService } from './bairro.service';
import { BairroController } from './bairro.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BairroController],
  providers: [BairroService],
})
export class BairroModule {}
