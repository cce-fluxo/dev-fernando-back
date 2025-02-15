/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Estado" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "paisId" INTEGER NOT NULL,

    CONSTRAINT "Estado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pais" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Pais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bairro" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cidadeId" INTEGER NOT NULL,

    CONSTRAINT "Bairro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cidade" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "estadoId" INTEGER NOT NULL,

    CONSTRAINT "Cidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "ruaId" INTEGER NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rua" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "bairroId" INTEGER NOT NULL,

    CONSTRAINT "Rua_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanoSaude" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "PlanoSaude_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clinica" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "enderecoId" INTEGER NOT NULL,

    CONSTRAINT "Clinica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "dataNasc" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "foto" TEXT,
    "resetToken" TEXT,
    "resetTokenExpiry" TIMESTAMP(3),

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medico" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "crm" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Medico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "historico" TEXT,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicoClinica" (
    "id" SERIAL NOT NULL,
    "medicoId" INTEGER NOT NULL,
    "clinicaId" INTEGER NOT NULL,
    "planoId" INTEGER,
    "codigo" TEXT,

    CONSTRAINT "MedicoClinica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agenda" (
    "id" SERIAL NOT NULL,
    "medicoId" INTEGER NOT NULL,
    "clinicaId" INTEGER NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataTermino" TIMESTAMP(3) NOT NULL,
    "horaInicio" TIMESTAMP(3) NOT NULL,
    "horaTermino" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Agenda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" SERIAL NOT NULL,
    "medicoId" INTEGER NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "conteudo" TEXT NOT NULL,

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Denuncia" (
    "id" SERIAL NOT NULL,
    "medicoId" INTEGER NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,

    CONSTRAINT "Denuncia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consulta" (
    "id" SERIAL NOT NULL,
    "medicoId" INTEGER NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "dataHora" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "linkWaze" TEXT,

    CONSTRAINT "Consulta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prontuario" (
    "id" SERIAL NOT NULL,
    "consultaId" INTEGER NOT NULL,
    "observacoes" TEXT NOT NULL,

    CONSTRAINT "Prontuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instrucoes" (
    "id" SERIAL NOT NULL,
    "consultaId" INTEGER NOT NULL,
    "conteudo" TEXT NOT NULL,

    CONSTRAINT "Instrucoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" SERIAL NOT NULL,
    "medicoId" INTEGER NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "tempoLimite" INTEGER NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mensagem" (
    "id" SERIAL NOT NULL,
    "chatId" INTEGER NOT NULL,
    "conteudo" TEXT NOT NULL,
    "dataEnvio" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mensagem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Estado_nome_key" ON "Estado"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Pais_nome_key" ON "Pais"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "PlanoSaude_tipo_key" ON "PlanoSaude"("tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_resetToken_key" ON "Usuario"("resetToken");

-- CreateIndex
CREATE INDEX "Usuario_resetToken_idx" ON "Usuario"("resetToken");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_usuarioId_key" ON "Medico"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_crm_key" ON "Medico"("crm");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_usuarioId_key" ON "Paciente"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Prontuario_consultaId_key" ON "Prontuario"("consultaId");

-- AddForeignKey
ALTER TABLE "Estado" ADD CONSTRAINT "Estado_paisId_fkey" FOREIGN KEY ("paisId") REFERENCES "Pais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bairro" ADD CONSTRAINT "Bairro_cidadeId_fkey" FOREIGN KEY ("cidadeId") REFERENCES "Cidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cidade" ADD CONSTRAINT "Cidade_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "Estado"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_ruaId_fkey" FOREIGN KEY ("ruaId") REFERENCES "Rua"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rua" ADD CONSTRAINT "Rua_bairroId_fkey" FOREIGN KEY ("bairroId") REFERENCES "Bairro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clinica" ADD CONSTRAINT "Clinica_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medico" ADD CONSTRAINT "Medico_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicoClinica" ADD CONSTRAINT "MedicoClinica_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "Medico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicoClinica" ADD CONSTRAINT "MedicoClinica_clinicaId_fkey" FOREIGN KEY ("clinicaId") REFERENCES "Clinica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicoClinica" ADD CONSTRAINT "MedicoClinica_planoId_fkey" FOREIGN KEY ("planoId") REFERENCES "PlanoSaude"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agenda" ADD CONSTRAINT "Agenda_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "Medico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agenda" ADD CONSTRAINT "Agenda_clinicaId_fkey" FOREIGN KEY ("clinicaId") REFERENCES "Clinica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "Medico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Denuncia" ADD CONSTRAINT "Denuncia_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "Medico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Denuncia" ADD CONSTRAINT "Denuncia_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "Medico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prontuario" ADD CONSTRAINT "Prontuario_consultaId_fkey" FOREIGN KEY ("consultaId") REFERENCES "Consulta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instrucoes" ADD CONSTRAINT "Instrucoes_consultaId_fkey" FOREIGN KEY ("consultaId") REFERENCES "Consulta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "Medico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensagem" ADD CONSTRAINT "Mensagem_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
