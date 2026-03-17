const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/dentists", require("./routes/dentistRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));

mongoose.connect("mongodb://127.0.0.1:27017/dentistDB")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
