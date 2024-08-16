import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const posts = await Promise.all(
    [...Array(5)].map(async (_, i) => {
      const post = await prisma.post.upsert({
        create: {
          content: `Content ${i + 1}`,
          id: i + 1,
          title: `Post ${i + 1}`,
        },
        update: {
          content: `Content ${i + 1}`,
          id: i + 1,
          title: `Post ${i + 1}`,
        },
        where: {
          id: i + 1,
        },
      })
      return post
    }),
  )

  console.log({ posts })
}

main()
  .then(async () => {
    await prisma.$disconnect()
    console.log('Seeded completed')
  })
  .catch(async (e) => {
    await prisma.$disconnect()
    console.error(e)
    process.exit(1)
  })
