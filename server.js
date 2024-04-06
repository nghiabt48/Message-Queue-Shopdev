'use strict';

const { consumeQueue } = require("./src/services/consumer.service");


const queueName = 'test'
consumeQueue(queueName).then(() => {
  console.log(`Message queue ${queueName} started!`)
}).catch(err => console.error(err))