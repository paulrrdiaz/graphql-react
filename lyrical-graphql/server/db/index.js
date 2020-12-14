import mongoose from 'mongoose'

const { MONGO_URI } = process.env

if (!MONGO_URI) {
  throw new Error('You must provide a mongodb URI')
}

export default () => {
  mongoose.Promise = global.Promise
  mongoose.connect(MONGO_URI)
  mongoose.connection
    .once('open', () => console.log('Connected to mongodb instance.'))
    .on('error', (error) => console.log('Error connecting to MongoLab:', error))
}
