import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
    } catch(error) {
        console.log(error)
    }
}

export default connectToDatabase
// In above code we just ensure that we successfully called the database or not?