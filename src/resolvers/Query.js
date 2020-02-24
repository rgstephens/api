const { getUserId } = require('../utils')

const Query = {
  snakes(parent, args, context) {
    const id = getUserId(context)
    const where = {
      owner: {
        id,
      },
    }
    return context.prisma.snakes({ where })
  },
  snake(parent, { id }, context) {
    return context.prisma.snake({ id })
  },
  me(parent, args, context) {
    const id = getUserId(context)
    return context.prisma.user({ id })
  },
}

module.exports = { Query }