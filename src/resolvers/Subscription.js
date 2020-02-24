const Subscription = {
  snakeSubscription: {
    subscribe: async (parent, args, context) => {
      return context.prisma.$subscribe
        .snake({
          mutation_in: ['CREATED', 'UPDATED'],
        })
        .node()
    },
    resolve: payload => {
      return payload
    },
  },
}

module.exports = { Subscription }