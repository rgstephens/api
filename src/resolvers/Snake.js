const Snake = {
  owner: ({ id }, args, context) => {
    return context.prisma.snake({ id }).owner()
  },
}

module.exports = {
  Snake,
}