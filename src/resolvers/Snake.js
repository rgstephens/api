function owner(parent, args, context) {
  return context.prisma.snake({ id: parent.id }).owner()
}

module.exports = {
  owner,
}