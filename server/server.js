const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());


const port = 5000;
const hostname = 'localhost'
const atlasDbUrl = 'mongodb+srv://netflix_clone-mern:1WawhxTsoZO4LxDe@cluster0.fa3no2s.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(atlasDbUrl, {
  useNewUrlParser: true, useUnifiedTopology: true

})

  .then(res => {
    app.listen(port, hostname, () => {
      console.log(`Server is running at ${hostname}:5000`)
      console.log("connected to mongoDB.")
    });
  })
  .catch(err => console.log(err));

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected!!")
})
mongoose.connection.on("connected", () => {
  console.log("mongodb connected!!")
})


// mongoose
//   .connect("mongodb://localhost:27017/netflix", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB Connetion Successfull");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

app.use("/api/user", userRoutes);