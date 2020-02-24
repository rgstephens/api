const User = {
  snakes: ({ id }, args, context) => {
    return context.prisma.user({ id }).snakes()
  },
}

module.exports = {
  User,
}