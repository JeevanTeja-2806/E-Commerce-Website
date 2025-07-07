import express from 'express'
import serverless from 'serverless-http'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongoodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


//App Config
const app = express()
connectDB()
connectCloudinary()

//Middlewares
app.use(express.json())
app.use(cors())

//API endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
  res.send('Hello World')
})

// ⚠️ REMOVE app.listen()
// app.listen(port, ()=> console.log('Server started on PORT: '+ port))

// ✅ Instead export the serverless handler
export const handler = serverless(app)
