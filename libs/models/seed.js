const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const { movies, actors, genres } = require('./data')

async function main() {
  await prisma.genre.createMany({
    data: genres,
    skipDuplicates: true,
  })

  await prisma.actor.createMany({
    data: actors,
    skipDuplicates: true,
  })

  await movies.map(async movie => await prisma.movie.upsert({
    where: { id: movie.id },
    update: {},
    create: {
      ...movie,
      actors: {
        connect: movie.actors.map(actor => ({ id: actor.id })),
      },
      genres: {
        connect: movie.genres.map(genre => ({ id: genre.id })),
      },
    },
  }))
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