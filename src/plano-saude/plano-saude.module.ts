import { Module } from '@nestjs/common';
import { PlanoSaudeService } from './plano-saude.service';
import { PlanoSaudeController } from './plano-saude.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PlanoSaudeController],
  providers: [PlanoSaudeService, PrismaService],
})
export class PlanoSaudeModule {}
