const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const WorkExperience = require("./models/WorkExperience");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/workexperience")
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("Error connecting to database: " + error));

// Welcome route
app.get("/api", (req, res) => {
    res.json({ message: "Welcome to the Work Experience API!" });
});

// GET – Hämta alla arbetserfarenheter
app.get("/api/workexperience", async (req, res) => {
    try {
        const result = await WorkExperience.find();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST – Skapa ny arbetserfarenhet
app.post("/api/workexperience", async (req, res) => {
    try {
        const { companyname, jobtitle, location, startdate } = req.body;
        if (!companyname || !jobtitle || !location || !startdate) {
            return res.status(400).json({ message: "Missing required fields." });
        }

        const newExperience = await WorkExperience.create(req.body);
        res.status(201).json(newExperience);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// PUT – Uppdatera en arbetserfarenhet
app.put("/api/workexperience/:id", async (req, res) => {
    try {
        const updated = await WorkExperience.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Work experience not found." });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE – Ta bort en arbetserfarenhet
app.delete("/api/workexperience/:id", async (req, res) => {
    try {
        const deleted = await WorkExperience.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Work experience not found." });
        res.json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});