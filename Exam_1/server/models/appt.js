const mongoose = require("mongoose")

const ApptSchema = mongoose.Schema({
    date: Date,
    // time: Date,
    patient: String,
    complaint: String
})

mongoose.model("Appt", ApptSchema)
