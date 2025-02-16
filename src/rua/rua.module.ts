import { Module } from '@nestjs/common';
import { RuaService } from './rua.service';
import { RuaController } from './rua.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RuaController],
  providers: [RuaService],
})
export class RuaModule {}
