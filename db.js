const mongoose=require('mongoose')
const connectDB=async()=>{
    try {
        const conn=await mongoose.connect('mongodb://localhost:27017/test',{
            useCreateIndex:true,
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useFindAndModify:false
        })
        console.log(`MongoDB Connected : ${conn.connection.host}`.blue.underline.bold)
        
    } catch (error) {
        console.log(`Error${error.message}`.red)
        process.exit(1)
    }
}
module.exports=connectDB