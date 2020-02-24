async function snakes(parent, args, context, info) {
  const where = args.filter ? {
    OR: [
      { description_contains: args.filter },
      { name_contains: args.filter },
    ],
  } : {}

  const snakes = await context.prisma.snakes({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  })
  return snakes
}

module.exports = {
  snakes,
}