const express = require('express')
const cors = require('cors') // Import the cors package
const app = express()
const PORT = process.env.PORT || 3001
const { controller } = require('./controller')

// Import and use the express.json() middleware
app.use(express.json())
app.use(cors())

app.get('/', controller.home)
app.post('/addtocart', controller.addtocart)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
