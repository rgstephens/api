function snakes(parent, args, context) {
  return context.prisma.user({ id: parent.id }).snakes()
}

module.exports = {
  snakes,
}