'use strict';

const { connectToRabbitMQ, connectToRabbitMQ_ForTest } = require("../dbs/init.rabbit");

describe('RabbitMQ Connection', () => {
  it('should connect to successful RabbitMQ', async() => {
    const result = await connectToRabbitMQ_ForTest()
    expect(result).toBeDefined();
  })
})