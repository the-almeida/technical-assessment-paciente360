import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding Profissoes table...')
    const profissoes = [
        { profNome: 'Médico' },
        { profNome: 'Engenheiro' },
        { profNome: 'Professor' },
        { profNome: 'Advogado' },
        { profNome: 'Enfermeiro' },
        { profNome: 'Desenvolvedor de Software' },
        { profNome: 'Arquiteto' },
        { profNome: 'Designer Gráfico' },
        { profNome: 'Chef de Cozinha' },
        { profNome: 'Policial' },
        { profNome: 'Bombeiro' },
        { profNome: 'Artista' },
        { profNome: 'Escritor' },
        { profNome: 'Músico' },
        { profNome: 'Ator' },
        { profNome: 'Psicólogo' },
        { profNome: 'Dentista' },
        { profNome: 'Veterinário' },
        { profNome: 'Contador' },
        { profNome: 'Consultor de TI' },
        { profNome: 'Fisioterapeuta' },
        { profNome: 'Farmacêutico' },
        { profNome: 'Economista' },
        { profNome: 'Piloto' },
        { profNome: 'Geólogo' },
        { profNome: 'Astrônomo' },
        { profNome: 'Historiador' },
        { profNome: 'Pintor' },
        { profNome: 'Jornalista' },
        { profNome: 'Engenheiro Civil' },
    ];

    for (const profissao of profissoes) {
        await prisma.profissao.create({
            data: profissao,
        });
    }

    console.log('Seeding Pessoas table...')
    await prisma.pessoa.create({
        data: {
            pesNome: "Gustavo Almeida",
            pesDataNascimento: "1997-08-13T00:00:00.000Z",
            pesCpf: "06209187994",
            pesTelefone: "+5544999571618",
            pesObservacoes: "Informações complementares sobre o Gustavo",
            profId: 6
        }
    })
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
