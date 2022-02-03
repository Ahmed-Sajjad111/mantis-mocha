const mongoose = require('mongoose')

// mongoose connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mantismocha', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

module.exports = mongoose.connection;