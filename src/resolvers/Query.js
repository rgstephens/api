function snakes(parent, args, context, info){
  return context.prisma.snakes()
}

module.exports = {
  snakes,
}