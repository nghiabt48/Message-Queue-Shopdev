const { connectToRabbitMQ, consumerQueue } = require("../dbs/init.rabbit")

const messageService =  {
  consumeQueue: async(queueName) => {
    try {
      const { channel } = await connectToRabbitMQ()
      await consumerQueue(channel, queueName)
    } catch (error) {
      console.error(error)
    }
  }
}
module.exports = messageService