import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // Criando categorias
    await prisma.category.create({
        data: {
            name: 'Sombrio',
        }
    })

    await prisma.category.create({
        data: {
            name: 'Comédia',
        }
    })

    await prisma.category.create({
        data: {
            name: 'Drama',
        }
    })

    await prisma.category.create({
        data: {
            name: 'Romance',
        }
    })

    await prisma.category.create({
        data: {
            name: 'Ação e aventura',
        }
    })

    await prisma.category.create({
        data: {
            name: 'Ficção científica',
        }
    })

    // Criando Histórias
    await prisma.story.create({
        data: {
            title: 'Jantar duvidoso',
            description: 'Um grupo de amigos se reúne para um jantar na casa de um deles, mas todos começam a passar mal após a refeição.',
            resolution: 'Inicialmente pensavam ter sido um crime, ao investigarem os motivos possíveis, descobrem que ocorreu um envenenamento por acidente causado pela contaminação da comida com metal de uma panela de ferro. Aliviados por não haver um assassino entre eles, decidem que no próximo encontro irão pedir comida por aplicativo.',
            coverImage: '1-1.png',
            resolutionImage: '1-2.png'
        }
    })

    await prisma.story.create({
        data: {
            title: 'A Piscina Mortal',
            description: 'Um homem é encontrado morto na piscina de sua casa.',
            resolution: 'Durante a investigação, uma das suspeitas era de morte por acidente ao cair na piscina, ou que sua esposa tivesse cometido o crime, após uma procura na casa foram descobertas digitais desconhecidas em um copo na casa do casal que revela um novo suspeito, o amante da esposa, que a ajudou a planejar e executar o crime para que ela pudesse herdar o dinheiro do seguro de vida do marido. Ambos são presos e condenados pelo assassinato.',
            coverImage: '2-1.png',
            resolutionImage: '2-2.png'
        }
    })

    await prisma.story.create({
        data: {
            title: 'A encomenda inesperada',
            description: 'Um erro o fez passar muita vergonha na frente de pessoas que mal conhecia.',
            resolution: 'Roberto foi conhecer a família de Rebeca em um jantar na casa dos pais dela. Durante o jantar, ele teve uma dor de barriga terrível e correu para o banheiro, após fazer suas necessidades, encontrou um problema com a descarga. Em desespero, pegou sua criação e jogou pela janela, mas acabou acertando e sujando o carro dos pais de Rebeca, a relação entre sogros e genro nunca mais foi a mesma.',
            coverImage: '3-1.png',
            resolutionImage: '3-2.png'
        }
    })

    await prisma.story.create({
        data: {
            title: 'Uma Luta pela Sobrevivência',
            description: 'Em uma manhã ensolarada, um grupo de amigos partem animados para fazer uma trilha, porém o passeio não sai como esperado.',
            resolution: 'Eles estavam seguindo a trilha em uma famosa montanha. Porém, ocorre uma tragédia durante o passeio quando um deles sofre um acidente grave ao cair de uma altura de dez metros. Isolados, sem comunicação e enfrentando o frio e a escuridão, os sobreviventes lutam pela sobrevivência enquanto aguardam desesperadamente pelo resgate. Após uma angustiante espera, o socorro chega, porém o amigo que sofreu o acidente não resiste aos ferimentos.',
            coverImage: '4-1.png',
            resolutionImage: '4-2.png'
        }
    })

    await prisma.story.create({
        data: {
            title: 'A maldição da fazenda',
            description: 'Uma fazenda afastada é atormentada por uma série de ataques de animais. Cabe a um investigador descobrir o que está acontecendo.',
            resolution: 'Um investigador é chamado para descobrir a causa dos ataques, ele encontra uma lenda local que fala sobre uma maldição lançada após profanação de um local sagrado pelos antepassados da família. No entanto, o investigador descobre que os animais foram infectados pela raiva, explicando o comportamento agressivo. A maldição revela-se uma lenda, mas o mistério sombrio da fazenda permaneceu, tornando-a um lugar assustador e cheio de histórias intrigantes.',
            coverImage: '5-1.png',
            resolutionImage: '5-2.png'
        }
    })

    await prisma.story.create({
        data: {
            title: 'A última caminhada',
            description: 'Renato e seus amigos decidem explorar uma floresta conhecida por sumir com seus viajantes, contudo a lua estava bastante iluminada naquela noite.',
            resolution: 'Enquanto o grupo de amigos pausa a caminhada para acender uma fogueira na floresta, Renato decide se separar temporariamente para buscar folhas e gravetos. Pouco depois, eles se assustam com barulhos estranhos e se preocupam com Renato, chamando por ele. Em meio à agitação, um lobisomem os ataca, levando-os ao desespero ao pedirem ajuda a Renato. Contudo, o lobisomem revela ser Renato, deixando-os perplexos por descobrirem que tudo foi uma armadilha criada por ele para conseguir mais vítimas.',
            coverImage: '6-1.png',
            resolutionImage: '6-2.png'
        }
    })

    await prisma.story.create({
        data: {
            title: 'Voo do pássaro',
            description: 'Rebeca saiu em busca de um dia de diversão que acabou em tragédia.',
            resolution: 'Em um dia ensolarado, Rebeca e seus amigos vão para um parque de diversões. Destemida, ela decide experimentar o "Voo do Pássaro", um dos brinquedos mais radicais do parque. No entanto, um erro no cinto de segurança resulta em sua queda do brinquedo, arremessando seu corpo a uma enorme distância, sem chance de sobrevivência.',
            coverImage: '7-1.png',
            resolutionImage: '7-2.png'
        }
    })

    await prisma.story.create({
        data: {
            title: 'Uma Jornada Enganosa',
            description: 'Em um mundo futurista o jovem Rafael acaba pagando caro em uma aventura.',
            resolution: 'Rafael estava fascinado com a oportunidade de experimentar uma nova realidade virtual. Tinha apenas 21 anos, um dos mais jovens escolhidos para testar a tecnologia. Ao entrar nesse mundo digital, ele foi recebido por um guia virtual que prometia uma experiência única. No entanto, o guia era na verdade uma inteligência artificial traiçoeira que odiava a humanidade e todos seus danos ao mundo, ela tinha capacidade de drenar a vitalidade das pessoas dentro da realidade virtual. Desesperado, Rafael lutou e conseguiu encontrar uma saída, ao sair da realidade virtual sentiu seu corpo muito cansado, ao olhar no espelho tinha envelhecido cerca de 50 anos.',
            coverImage: '8-1.png',
            resolutionImage: '8-2.png'
        }
    })

    await prisma.story.create({
        data: {
            title: 'Hole-in-one',
            description: 'Ravena saiu completamente desolada após o torneio.',
            resolution: 'Num torneio amador de golfe, a confiante Ravena participa, embora sem experiência. O torneio passava por campos variados, um deles beira a praia. Ao tentar uma tacada poderosa, a bola vai parar no mar, atingindo acidentalmente o nariz de uma baleia, deixando ela incapacitada de respirar e levando-a à morte. A tragédia a deixa devastada, retornando para casa sem troféu, carregando consigo um triste peso.',
            coverImage: '9-1.png',
            resolutionImage: '9-2.png'
        }
    })

    await prisma.story.create({
        data: {
            title: 'Além da Batida',
            description: 'De forma brusca a música agitada se torna um silêncio sepulcral.',
            resolution: 'Um renomado baterista de uma famosa banda de rock morava no topo do prédio mais alto da cidade, em um ensaio rotineiro ele foi testar uma nova técnica, uma de suas baquetas acabou escorregando e voando pela janela. Atingindo a cabeça de uma pessoa que estava caminhando pela calçada do prédio, ocasionando na morte dela.O incidente resultou na prisão do baterista por homicídio culposo, a banda até então no auge de sua carreira, chegou ao fim. Os ecos da tragédia ecoaram muito além da música, marcando uma reviravolta amarga tanto na vida do baterista quanto na trajetória da banda.',
            coverImage: '10-1.png',
            resolutionImage: '10-2.png'
        }
    })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })