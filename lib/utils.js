import jwt from 'jsonwebtoken'

//TOken Generate Function

export const generateToken = async (userId) => {
const token =  jwt.sign({userId},process.env.JWT_SECRET)
return token;
}