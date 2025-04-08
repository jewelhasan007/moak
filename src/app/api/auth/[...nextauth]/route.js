import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

const handler = NextAuth({
session : {
    strategy: 'jwt',
    maxAge: 30 * 20 * 60 * 60
},
providers : [
    CredentialsProvider({
credentials: {
email: {},
password: {}
},
async authorize(credentials){

    const {email, password} = credentials;
    if(!email || !password) {
        return null
    }
  const db = await connectDB();
  const currentUser =await db.collection("users").findOne({email})
  if(!currentUser){
    return null;
  }
  const matchPass = bcrypt.compareSync(password, currentUser.password);
  if(!matchPass){
    return null;
  }
  return currentUser
}
  }),
],
callbacks : {},
pages: {
    signIn: `${process.env.NEXT_PUBLIC_BASE_URL}/login`

},
}) 
export {handler as GET, handler as POST}