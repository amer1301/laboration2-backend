const mongoose = require("mongoose");

const WorkExperienceSchema = new mongoose.Schema({
    companyname: { type: String, required: true },
    jobtitle: { type: String, required: true },
    location: { type: String, required: true },
    startdate: { type: Date, required: true },
    enddate: { type: Date },
    description: { type: String }
});

module.exports = mongoose.model("WorkExperience", WorkExperienceSchema);
