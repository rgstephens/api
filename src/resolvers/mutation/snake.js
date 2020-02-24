const { getUserId } = require('../../utils')

const snake = {
  async createSnake(parent, { name, description }, context) {
    const userId = getUserId(context)
    return context.prisma.createSnake({
      name,
      description,
      owner: { connect: { id: userId } },
    })
  },

  async deleteSnake(parent, { id }, context) {
    const userId = getUserId(context)
    const snakeExists = await context.prisma.$exists.snake({
      id,
      owner: { id: userId },
    })
    if (!snakeExists) {
      throw new Error(`Snake not found or you're not the owner`)
    }

    return context.prisma.deleteSnake({ id })
  },
}

module.exports = { snake }