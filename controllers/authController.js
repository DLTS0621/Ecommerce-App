import { hashPassword, comparePassword } from '../helpers/authHelper.js';
import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const registerController = async (req,res) =>{
    try {
        const {name,email,password,phone,address} = req.body
        //validation
        if(!name){
            return res.send({message:'Name is required'})
        }
        if(!email){
            return res.send({message:'Email is required'})
        }
        if(!password){
            return res.send({message:'Password is required'})
        }
        if(!phone){
            return res.send({message:'Phone No is required'})
        }
        if(!address){
            return res.send({message:'Address is required'})
        }

       //check user
        const existingUser = await userModel.findOne({email})

         //Existing user
         if(existingUser){
            return res.status(200).send({
                success: false,
                message: 'Already register please login.'
            })
         }

         //register user
         const hashedPassword = await hashPassword(password)
         //save
         const user = await new userModel({name,email,phone,address,password:hashedPassword}).save()

         res.status(201).send({
            success: true,
            message: 'User has been registered',
            user,
         })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error
        })
    }
};

//POST LOGIN
export const loginController = async(req,res) =>{
    try {
        const {email,password} = req.body
        //validation
        if(!email || !password){
            return res.status(404).send({
                success: false,
                message: 'Invalid Email or password '
            })
        }

        //check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success: false,
                message: 'User not found'
            })
        }
        const match= await comparePassword(password, user.password)
        if(!match){
            return res.status(200).send({
                success: false,
                message: 'Invalid Password'
            })
        }

        //token
        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {
            expiresIn: '7d',
        });
        res.status(200).send({
            success: true,
            message: 'Login successful',
            token,
            user:{
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            
            }
 
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Login',
            error
        })
    }
};

//TEST CONTROLLER
export const testController = (req,res) =>{
    res.send('Protected Routes');
};

