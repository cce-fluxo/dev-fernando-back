import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';
import { MedicoModule } from './medico/medico.module';
import { PacienteModule } from './paciente/paciente.module';
import { ClinicaModule } from './clinica/clinica.module';
import { PaisModule } from './pais/pais.module';
import { EstadoModule } from './estado/estado.module';
import { CidadeModule } from './cidade/cidade.module';
import { BairroModule } from './bairro/bairro.module';
import { RuaModule } from './rua/rua.module';
import { EnderecoModule } from './endereco/endereco.module';
import { PlanoSaudeModule } from './plano-saude/plano-saude.module';
import { MedicoClinicaModule } from './medico-clinica/medico-clinica.module';
import { AgendaModule } from './agenda/agenda.module';
import { DenunciaModule } from './denuncia/denuncia.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { ConsultaModule } from './consulta/consulta.module';
import { InstrucoesModule } from './instrucoes/instrucoes.module';
import { ProntuarioModule } from './prontuario/prontuario.module';
import { ChatModule } from './chat/chat.module';
import { MensagemModule } from './mensagem/mensagem.module';

@Module({
  imports: [
    PrismaModule,
    UsuarioModule,
    AuthModule,
    MedicoModule,
    PacienteModule,
    ClinicaModule,
    PaisModule,
    EstadoModule,
    CidadeModule,
    BairroModule,
    RuaModule,
    EnderecoModule,
    PlanoSaudeModule,
    MedicoClinicaModule,
    AgendaModule,
    DenunciaModule,
    AvaliacaoModule,
    ConsultaModule,
    InstrucoesModule,
    ProntuarioModule,
    ChatModule,
    MensagemModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // }
  ],
})
export class AppModule {}
