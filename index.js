const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);


// User.updateOne({name:"Anil" , age:30})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err) =>{
//   console.log(err);
// })

// User.updateMany({age:{$gt :21}, age:32})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err) =>{
//   console.log(err);
// })


// User.deleteOne({name:"Ritik"})
// .then((res) =>{
//   console.log(res);
// })
// .catch((res) =>{
//   console.log(res);
// })

// User.deleteMany({age:21})
// .then((res) =>{
//   console.log(res);
// })
// .catch((err) =>{
//   console.log(err);
// })
// User.findOneAndUpdate({name:"Anil", age:25, new:true})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err) =>{
//   console.log(err);
// })


// User.findOne({age:{$gt:20}}).then((res) =>{
//   console.log(res);
// }) .catch((err) =>{
//   console.log(err);
// })

// const user1 = new User ({
//     name:"Anil" , 
//     email:"anilyadav@gmail.com" , 
//     age:21
// });

// User.insertMany([
//     {
//         name:"Anil",
//         email:"anilyadav@gmai.com",
//         age:21
//     },
//     {
//         name:"Rohit",
//         email:"rohithabibkar@gmai.com",
//         age:21
//     },
//     {
//         name:"Ritik",
//         email:"ritikpandey@gmai.com",
//         age:21
//     }
// ]).then((data) =>{
//     console.log(data);
// })

// const user2 = new User ({
//     name:"Ritik" , 
//     email:"ritikpandey@gmail.com" , 
//     age:21
// });

// user2.save().then((res) =>{
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// });

User.findByIdAndDelete("66c0f4dc5d2d0e71f92e5222")
.then((res) =>{
  console.log(res);
})
.catch((err) =>{
  console.log(err);
})
