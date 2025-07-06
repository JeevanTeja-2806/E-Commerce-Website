import validator from "validator"
import UserModel from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const createToken = (id) => {
   return jwt.sign({ id }, process.env.JWT_SECRET)
}


//Route for user Login
const loginUser = async (req, res) => {
   try {
      const { email, password } = req.body;

      // If user is available with that email id
      const user = await UserModel.findOne({ email })
      if (!user) {
         return res.json({ success: false, message: "User does not exists" })
      }

      //If user exists then proceed with
      const isMatch = await bcrypt.compare(password, user.password)
      if (isMatch) {
         const token = createToken(user._id)
         res.json({ success: true, message: "User logged in successfully", token })
      }
      else {
         res.json({ success: false, message: "Invalid Credentials" })
      }

   } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
   }
}

//Route for User Register
const registerUser = async (req, res) => {
   try {
      const { name, email, password } = req.body;

      //Checking user already Exists or not
      const exists = await UserModel.findOne({ email })
      if (exists) {
         return res.json({ success: false, message: "User already exists" })
      }


      //validating email format and strong password
      if (!validator.isEmail(email)) {
         return res.json({ success: false, message: "Please enter a valid Email" })
      }
      if (password.length < 8) {
         return res.json({ success: false, message: "Please enter a strong Password" })
      }
     

      //hashing user password
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)

      //create User
      const newUser = new UserModel({
         name,
         email,
         password: hashedPassword
      })

      //save user in database
      const user = await newUser.save()

      //creating token for users
      const token = createToken(user._id)
      res.json({ success: true, message: "User created successfully", token })

   } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
   }
}

//Route for Admin login
const adminLogin = async (req, res) => {
   try {
      const { email, password } = req.body
      if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
         const token = jwt.sign(email + password, process.env.JWT_SECRET);
         res.json({ success: true, token })
      }
      else {
         res.json({ success: false, message: "Invalid Credentials" })
      }
   } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })

   }
}

export { loginUser, registerUser, adminLogin }