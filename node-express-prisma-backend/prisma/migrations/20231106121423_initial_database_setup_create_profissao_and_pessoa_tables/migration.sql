-- CreateTable
CREATE TABLE "Pessoa" (
    "pes_id" SERIAL NOT NULL,
    "pes_nome" VARCHAR(255) NOT NULL,
    "pes_data_nascimento" DATE NOT NULL,
    "pes_cpf" VARCHAR(14) NOT NULL,
    "pes_telefone" VARCHAR(14),
    "pes_observacoes" TEXT,
    "prof_id" INTEGER,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("pes_id")
);

-- CreateTable
CREATE TABLE "Profissao" (
    "prof_id" SERIAL NOT NULL,
    "prof_nome" VARCHAR(255) NOT NULL,

    CONSTRAINT "Profissao_pkey" PRIMARY KEY ("prof_id")
);

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_prof_id_fkey" FOREIGN KEY ("prof_id") REFERENCES "Profissao"("prof_id") ON DELETE SET NULL ON UPDATE CASCADE;
