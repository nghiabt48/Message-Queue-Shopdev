'use strict';
const mongoose = require('mongoose');
const connectString = 'mongodb+srv://nghiabt48:giang1207@mycluster.hjfyqg1.mongodb.net/ShopDev'
const testSchema = mongoose.Schema({ name: String})
const Test = mongoose.model('Test', testSchema)
describe('Mongoose connection', () => {
  let connection;
  beforeAll(async() => {
    connection = await mongoose.connect(connectString)
  })
  afterAll( async() => {
    await connection.disconnect()
  })
  it('should connect to mongoose', () => {
    expect(mongoose.connection.readyState).toBe(1)
  })
  it('should save a document to database', async() => {
    const user = new Test({ name: "Nghia"})
    await user.save()
    expect(user.isNew).toBe(false)
  })
  it('should find a document in database', async() => {
    const user = await Test.findOne({name: 'Nghia'})
    expect(user).toBeDefined()
    expect(user.name).toBe('Nghia')
  })
})