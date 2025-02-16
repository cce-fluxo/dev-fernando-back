import { Module } from '@nestjs/common';
import { CidadeService } from './cidade.service';
import { CidadeController } from './cidade.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CidadeController],
  providers: [CidadeService],
})
export class CidadeModule {}
