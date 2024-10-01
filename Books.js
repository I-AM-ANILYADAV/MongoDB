const mongoose = require('mongoose');
main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
const bookSchema =  new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:20
    },
    author:{
        type:String
    },
    Price:{
        type:Number,
        min :[1 , "Price is too low for amazon selling"]
    },
    Discount :{
      type:Number,
      default:0
    }, 
    category:{
      type:String,
      enum:["Fiction" , "Non-Fiction"]
    },
    genre:{String}
})


const Book = mongoose.model("Book", bookSchema);
Book.findByIdAndUpdate("66c24c7acf0023288149a4cf", {price:-500})
.then((res)=>{console.log(res);
})
.catch((err)=>{
  console.log(err);
})




// let Book1 = new Book({
//   title:"Gone Girl",
//   Price:10,
//   category:"Fiction",
//   genre:["Comics", "Superheroes" , "Fiction"]
// })
// Book1.save().then((res)=>{
//   console.log(res);
// })
// .catch((err) =>{
//   console.log(err);
// })