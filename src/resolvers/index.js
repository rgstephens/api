const { Query } = require('./Query')
const { auth } = require('./Mutation/auth')
const { snake } = require('./Mutation/snake')
const { Subscription } = require('./Subscription')
const { User } = require('./User')
const { Snake } = require('./snake')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...snake,
  },
  Subscription,
  User,
  Snake,
}