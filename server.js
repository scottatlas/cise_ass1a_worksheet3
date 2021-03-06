// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');


//require("dotenv").config();

const app = express();
// require("./models/quote");

//     mongoose
//      .connect(
//              {
//                useNewUrlParser: true,
//                useUnifiedTopology: true,
//              }
//      )
//      .then(() => console.log("MongoDB has been connected"))
//      .catch((err) => console.log(err));

//middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

//import routes
//require("./routes/quoteRoute.js")(app);

// routes
const books = require('./routes/api/books');

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/api/books', books);

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));