'use strict';
const amqp = require('amqplib')
const connectToRabbitMQ = async() => {
  try {
    const connection = await amqp.connect('amqp://guest:guest@localhost')
    if(!connection) throw new Error('Connection not established')
    const channel = await connection.createChannel()
  return { channel , connection }
  } catch (error) {
    
  }
}
const connectToRabbitMQ_ForTest = async() => {
  try {
    const { channel, connection } = await connectToRabbitMQ()
   const queue = 'test'
   const message = 'Shopdev Hello'
   await channel.assertQueue(queue)
   await channel.sendToQueue(queue, Buffer.from(message))
   await connection.close()
   return { channel , connection }
  } catch (error) {
    console.error(error)
  }
}
module.exports = {connectToRabbitMQ, connectToRabbitMQ_ForTest}