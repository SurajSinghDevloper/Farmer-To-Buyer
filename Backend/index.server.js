const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const app = express();
const cors = require('cors');
const PORT = process.env.PORT;


// Routes
const adminRoutes = require('./src/routes/admin/auth');
const userRoutes = require('./src/routes/auth');

// Enable CORS
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

try {
    const con = mongoose.connect(process.env.DBURL);
    if (con) {
        console.log("Connected To Database 🟢🟢🟢")
    } else {
        console.log("While Connecting There is Some Issue 🏮🏮🏮")
    }

} catch (error) {
    console.log("👉👉👉 ~~ file: index.server.js:17 ~~ error:", error)

}




app.use('/api', userRoutes);
app.use('/api', adminRoutes);


app.listen(process.env.PORT, () => console.log("Server running on port 🈂️🈂️🈂️🈂️" + process.env.PORT));