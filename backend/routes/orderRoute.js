import express from 'express'
import {placeorder, placeorderStripe, placeorderRazorpay, allOrders, updateStatus, userOrders, verifyStripe, verifyRazorpay} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

//Admin Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

//Payment Features
orderRouter.post('/place',authUser, placeorder)
orderRouter.post('/stripe',authUser, placeorderStripe)
orderRouter.post('/razorpay',authUser, placeorderRazorpay)

//User Features
orderRouter.post('/userorders', authUser, userOrders)

//Verify Payments
orderRouter.post('/verifyStripe', authUser, verifyStripe )
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay )

export default orderRouter